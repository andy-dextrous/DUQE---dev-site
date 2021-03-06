import React, { useContext, useEffect, useRef, useLayoutEffect } from "react"
import { Link } from "gatsby"
import { gsap, ScrollTrigger } from "../../gsap"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { MenuContext } from "../Layout"
import { SocialFollows } from "../social/SocialFollows"
import { useVariable } from "../../hooks"
import Logo from "../../assets/logos/Logo"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Divider,
  Flex,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"

function Modal() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
  const primaryMenu = useMenuQuery("Primary")
  const { mobileNavHeight } = useVariable()
  const menuWrapper = useRef()
  const overlay = useRef()
  const primaryMenuLinks = useRef()
  const navAnimation = useRef(null)

  useLayoutEffect(() => {
    if (!ScrollTrigger) return
    const tl = gsap
      .timeline({ paused: true })
      .fromTo(
        overlay.current,
        { visibility: "hidden", opacity: 0 },
        {
          visibility: "visible",
          opacity: 0.5,
          duration: 0.4,
          ease: "Power3.inOut",
        },
        0
      )
      .fromTo(
        menuWrapper.current,
        {
          xPercent: "-100",
        },
        {
          xPercent: "0",
          duration: 0.3,
          ease: "sine.out",
        },
        0
      )
      .fromTo(
        [".primaryMenuLink"],
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.04,
          duration: 0.15,
          ease: "sine.inOut",
        },
        0.1
      )
      .fromTo(
        ".accordion-icon",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
        }
      )
    navAnimation.current = tl
  }, [])

  useEffect(() => {
    if (!navAnimation.current) return
    if (isMenuOpen) {
      navAnimation.current.play()
    } else {
      navAnimation.current.reverse()
    }
  }, [isMenuOpen])

  return (
    <>
      <Flex
        as="nav"
        pt={mobileNavHeight}
        pb={[40, 40, 0]}
        h="100vh"
        w={["100vw", "100vw", "400px"]}
        justify="center"
        zIndex="modal"
        position="fixed"
        left="0"
        top="0"
        overflowY={["scroll", "scroll", "hidden"]}
        bg="brandConcrete.default"
        // sx={{ backdropFilter: "blur(10px)" }}
        id="navPopup"
        borderRight="1px solid rgba(187,187,187,0.3)"
        ref={menuWrapper}
      >
        <Box
          w="full"
          h={["auto", "auto", "auto", "full"]}
          position="relative"
          overflow="hidden"
        >
          <Center
            px={[12, 12, 16]}
            w="full"
            h={["auto", "auto", "auto", "full"]}
          >
            <Stack
              w="full"
              h="80%"
              direction={["column", "column", "column"]}
              justify={["center", "center", "space-between"]}
              align={["center", "center", "center"]}
              py={[16, 8, 20]}
              px="0"
              spacing={[8, 8, 20]}
              m="auto"
              divider={<Divider />}
            >
              <VStack
                as="nav"
                w="full"
                align="flex-start"
                spacing={[4, 4, 4, 12]}
                p={[0, 0, 12, 8, 16, 0]}
                justify="flex-start"
                flex={[2]}
              >
                <Accordion
                  allowToggle
                  align="start"
                  pl={[0, 0, 0]}
                  ref={primaryMenuLinks}
                  // defaultIndex={[0]}
                >
                  {primaryMenu.menuItems.nodes
                    .filter(item => {
                      return !item.parentId
                    })
                    .map(item => {
                      return !item.childItems.nodes.length ? (
                        <Link
                          key={`nav-link-${item.id}`}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Text className="primaryMenuLink" py={2}>
                            {item.label}
                          </Text>
                        </Link>
                      ) : (
                        <AccordionItem
                          border="none"
                          key={`nav-link-${item.id}`}
                        >
                          <AccordionButton
                            px="0"
                            py={2}
                            className="link-wrapper"
                            _hover={{ bg: "transaprent" }}
                          >
                            <Text className="primaryMenuLink">
                              {item.label}
                            </Text>
                            <AccordionIcon
                              color="dark.default"
                              className="accordion-icon"
                              ml={1}
                            />
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                            {item.childItems.nodes.map(child => {
                              return (
                                <Link
                                  key={"accordion" + child.id}
                                  to={child.path}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <Text className="subMenuLink">
                                    {child.label}
                                  </Text>
                                </Link>
                              )
                            })}
                          </AccordionPanel>
                        </AccordionItem>
                      )
                    })}
                </Accordion>
              </VStack>
              <VStack spacing={12} align="flex-start" w="full">
                {/* <VStack bg="brandYellow.default" p={8} w="full" rounded="xl">
                  <Heading as="h4">Cost Calculator</Heading>
                  <Link to="/cost-calculator">
                  <Button>Cost calculator</Button>
                  </Link>
                </VStack> */}
                <SocialFollows
                  direction="row"
                  button
                  size="md"
                  variant="circle"
                />
                <Logo useContrast={false} width="60px" initialColor="#0b0b0b" />
              </VStack>
            </Stack>
          </Center>
        </Box>
      </Flex>
      <Box
        layerStyle="overlay"
        bg="dark.default"
        opacity="0.5"
        height="100vh"
        w="100vw"
        position="fixed"
        ref={overlay}
        onClick={() => {
          setIsMenuOpen(false)
        }}
      />
    </>
  )
}

export default Modal
