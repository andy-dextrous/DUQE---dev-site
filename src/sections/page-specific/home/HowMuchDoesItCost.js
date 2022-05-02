import { Button, Center, Heading, Image, VStack } from "@chakra-ui/react"
import React, { useEffect, useRef } from "react"
import CrossIcon from "../../../assets/icons/CrossIcon"
import SectionWrapper from "../../../components/SectionWrapper"
import { gsap, ScrollTrigger } from "../../../gsap"

function HowMuchDoesItCost() {
  const cross = useRef()
  useEffect(() => {
    if (!ScrollTrigger) return
    gsap.to(cross.current, {
      rotation: -50,
      ease: "linear",
      scrollTrigger: {
        trigger: cross.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])
  return (
    <SectionWrapper
      bg="brandYellow.default"
      className="light"
      containerSize="lg"
      pb={0}
      containerStyles={{ py: 0, pt: [2, 4, 6, 8, 60] }}
      zIndex="1"
    >
      <VStack spacing={12}>
        <Heading className="jumbo" textAlign="center">
          How much does it cost?
        </Heading>
        <Heading as="h3" className="thin-h3" textAlign="center">
          Use the <strong>DUQE Cost Calculator</strong> to find out the cost of
          your business setup. It’s the number one question we get asked. <br />
          <strong>Find out in an instant.</strong>
        </Heading>
        <Button>Calculate Cost</Button>
      </VStack>
      <Center mt={20}>
        {" "}
        <Image
          h="908px"
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650944008/DUQE/Calculator.png"
        />
      </Center>

      <CrossIcon
        position="absolute"
        top="-200"
        right="-200"
        zIndex="1"
        ref={cross}
      />
    </SectionWrapper>
  )
}

export default HowMuchDoesItCost
