import React from "react"
import SectionWrapper from "../../../components/SectionWrapper"
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Image,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useVariable } from "../../../hooks/useVariable"

const data = [
  "Manufacturing",
  "Wholesale & Retail",
  "Accomodation",
  "Financial & Insurance",
  "Professional, Science & Technical",
  "Manufacturing",
  "Wholesale & Retail",
  "Accomodation",
  "Financial & Insurance",
  "Professional, Science & Technical",
]

function Activities() {
  const { containerPaddingY } = useVariable()
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  return (
    <SectionWrapper
      minH="100vh"
      containerSize="xl"
      containerStyles={{ py: 0, pb: containerPaddingY }}
      mb={containerPaddingY}
      className="light"
      _before={{
        content: "''",
        bg: "dark.default",
        width: "100%",
        height: "200px",
        top: 0,
        left: 0,
        right: 0,
        position: "absolute",
        zIndex: "-1",
      }}
    >
      <Box borderRadius="30px" overflow="hidden" w="full">
        <Tabs w="full" bg="#f6f6f6" p={8} display={["none", "none", "flex"]}>
          <TabList
            display="flex"
            flexDirection="column"
            wrap="nowrap"
            border="none"
            sx={{
              "button[aria-selected='true']": {
                bg: "white !important",
                img: {
                  filter: "grayscale(0)",
                  opacity: 1,
                  transform: "scale(1)",
                },
              },
            }}
          >
            {data.map((item, i) => {
              return (
                <Tab
                  w="500px"
                  border="none"
                  key={i}
                  h="80px"
                  px={8}
                  _hover={{ bg: "dark.100" }}
                  _focus={{ dropShadow: "none", border: "none" }}
                >
                  <HStack w="full" justify="flex-start">
                    <Image
                      h="50px"
                      src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650972189/DUQE/Society.svg"
                      filter="grayscale(100%)"
                      opacity={0.3}
                      transform="scale(0.8)"
                      transition="all 0.3s easeInOut"
                    />
                    <Text>{item}</Text>
                  </HStack>
                </Tab>
              )
            })}
          </TabList>

          <TabPanels bg="white" px={8}>
            {data.map((item, i) => {
              return (
                <TabPanel w="full">
                  <Accordion allowToggle key={i}>
                    {shuffle(data).map((item, i) => {
                      return i <= 7 ? (
                        <AccordionItem key={i}>
                          <AccordionButton h="94px">
                            <Box flex="1" textAlign="left">
                              {item}
                            </Box>
                            <AccordionIcon icon={<AddIcon fontSize="12px" />} />
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </AccordionPanel>
                        </AccordionItem>
                      ) : (
                        <></>
                      )
                    })}
                  </Accordion>
                </TabPanel>
              )
            })}
          </TabPanels>
        </Tabs>
        <Accordion
          allowToggle
          display={["block", "block", "none"]}
          w="full"
          bg="#f6f6f6"
        >
          {data.map((item, i) => {
            return (
              <AccordionItem key={i}>
                <AccordionButton h="94px">
                  <Box flex="1" textAlign="left">
                    {item}
                  </Box>
                  <AccordionIcon icon={<AddIcon fontSize="12px" />} />
                </AccordionButton>

                <AccordionPanel pb={4} bg="white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Box>
    </SectionWrapper>
  )
}

export default Activities
