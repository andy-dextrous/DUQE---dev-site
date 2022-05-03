import React, { forwardRef } from "react"
import { useThemeOptions } from "../hooks/useThemeOptions"
import { Box, Flex } from "@chakra-ui/react"
import { SmartImage } from "../components/SmartImage"
import Video from "./video/Video"

const SectionWrapper = forwardRef((props, ref) => {
  const {
    bgImage,
    alt,
    bgVideo,
    children,
    eager,
    isFirstSection,
    overlay,
    overlayStyle,
    withContainer = true,
    containerSize = "xl",
    containerStyles = {},
    ...sectionStyles
  } = props

  const { sidebarMenuMargin, topBarHeight } = useThemeOptions()

  return (
    <>
      <Flex
        as="section"
        width={["100%"]}
        position="relative"
        pt={isFirstSection ? `${topBarHeight}px` : 0}
        px={[5, 5, 16, 20, 40, "200px"]}
        justify="center"
        {...sectionStyles}
      >
        {withContainer ? (
          <Box
            maxW={`container.${containerSize}`}
            w={["100%", "100%", `container.${containerSize}`]}
            h="full"
            py={[20, 20, 32, 48, 60]}
            {...containerStyles}
          >
            {children}
          </Box>
        ) : (
          <>{children}</>
        )}
        {(bgImage || overlay || bgVideo) && (
          <Box layerStyle="bgImage" ref={ref}>
            <Box layerStyle="fillSpace" position="relative">
              {overlay && (
                <Box
                  className="overlay"
                  layerStyle="overlay"
                  {...overlayStyle}
                />
              )}
              {bgImage && (
                <SmartImage img={bgImage} layerStyle="bgImage" alt={alt} />
              )}
              {bgVideo && <Video id="bgVideo" src={bgVideo} />}
            </Box>
          </Box>
        )}
      </Flex>
    </>
  )
})

export default SectionWrapper
