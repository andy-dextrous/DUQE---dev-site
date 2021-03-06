import React from "react"
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react"

function Blurb({ img, title, text }) {
  return (
    <VStack
      align="start"
      flex="1"
      spacing={5}
      justifyContent="flex-start"
      sx={{ ".blurb-title": { textTransform: "unset" } }}
    >
      <Box h={["40px", "50px", "80px"]}>
        <Image src={img} h="100%" />
      </Box>
      <Heading as="h4" className="blurb-title">
        {title}
      </Heading>
      <Text>{text}</Text>
    </VStack>
  )
}

export default Blurb
