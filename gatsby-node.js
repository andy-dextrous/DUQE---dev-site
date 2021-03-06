const fs = require("fs")
const path = require("path")
const generalSeoFromWP = require(`./src/utils/seo/generalSeoFromWP`)
const defaultOptions = require(`./defaultOptions`)
const THEME_CONFIG = require(`./themeConfig`)
const getBrandColorPallette = require("./src/utils/getBrandColors")
const createSitePages = require(`./src/utils/createSitePages`)
const createPosts = require(`./src/utils/createPosts`)
const createCategories = require(`./src/utils/createCategories`)
const createRedirects = require(`./src/utils/createRedirects`)
const createUsers = require(`./src/utils/createUsers`)
const createCustomPostTypes = require("./src/utils/createCustomPostTypes")

exports.onPreInit = () => {
  // Create the chakra color palette
  if (!defaultOptions.createColorPallete) return

  const dataObject = getBrandColorPallette(THEME_CONFIG)
  const writePath = path.resolve(
    __dirname,
    `./src/@chakra-ui/gatsby-plugin/foundations/colors.js`
  )

  let codeString = `export const colors = ${JSON.stringify(
    dataObject,
    null,
    2
  )}`

  if (fs.existsSync(writePath)) {
    fs.writeFileSync(writePath, codeString, "utf8", { flag: "wx" }, err => {
      if (err) {
        return console.log(err)
      }
      console.log("Chakra custom color palette created!")
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  // Check all available fields from WP to see if Yoast is one of them
  const queryTypes = await graphql(`
    query {
      __type(name: "Wp") {
        fields {
          name
          type {
            name
          }
        }
      }
    }
  `)

  const seoFromWP = !!queryTypes.data.__type.fields.find(
    el => el.name === "seo" && el.type.name === "WpSEOConfig"
  )
  // If Yoast is not installed, this boolean prevents any crashing
  const conditionalSeoQuery = seoFromWP ? generalSeoFromWP : ``

  const result = await graphql(`
    query PageData {
      wp {
        readingSettings {
          postsPerPage
        }
        redirection {
          redirects {
            origin
            target   
          }
        }
        ${conditionalSeoQuery}
      }
      postsPage: allWpPage(filter: {isPostsPage: {eq: true}}) {
        nodes {
          uri
          template {
            templateName
          }
        }
      }
      frontPage: allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          uri
        }
      }
    }
  `)

  // Check for errors
  if (result.errors) {
    reporter.panicOnBuild(`Houston, we have a problem...`, result.errors)
    return
  }

  // Extract variables
  const { wp, postsPage, frontPage } = result.data

  const {
    redirection: { redirects },
    readingSettings: { postsPerPage },
    seo,
  } = wp

  // Get blog page path from wordpress settings. Make blog page the homepage if no homepage is set
  const postsPath = postsPage.nodes.length
    ? postsPage.nodes[0].uri
    : frontPage.nodes.length
    ? false
    : "/"

  const postsPageTemplate = postsPage.nodes.length
    ? postsPage.nodes[0].template.templateName
    : "Default"

  // Pass options to createPages function
  const config = {
    ...defaultOptions,
    postsPerPage: postsPerPage,
    seoFromWP,
    generalSeoSettings: seo,
    postsPath,
    postsPageTemplate,
    ...options,
  }

  // Create all pages requested by defaultOptions
  await Promise.all([
    config.useWpRedirects && createRedirects({ actions }, redirects),
    config.createPages && createSitePages({ actions, graphql }, config),
    config.createPosts && createPosts({ actions, graphql }, config),
    config.createCategories && createCategories({ actions, graphql }, config),
    config.createTags && createTags({ actions, graphql }, config),
    config.createUsers && createUsers({ actions, graphql }, config),
    config.createCustomPostTypes &&
      createCustomPostTypes({ actions, graphql }, config),
  ])
}
