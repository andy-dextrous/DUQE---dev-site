import { Box } from "@chakra-ui/react"
import React, { useState, useRef } from "react"
import useContrastingColor from "../../hooks/useContrastingColor"

function Logo({
  initialColor = "white",
  width = "60px",
  height = "100%",
  useContrast = true,
}) {
  const logo = useRef()
  const [color, setColor] = useState(initialColor)

  useContrastingColor(
    { color, setColor },
    logo,
    { fill: color },
    null,
    useContrast
  )

  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 61 70.71"
      fill={color}
      ref={logo}
    >
      <path style={{ fill: "none" }} d="M0 0h61v70.71H0z" />
      <path d="M46.51.02v10.79h-1.88V.02H30.08v9.27C27.78 3.83 22.41 0 16.13 0H1v30.39h7.84A16.291 16.291 0 0 0 .36 44.71c0 7 4.4 12.97 10.57 15.27l-1.47 6.33 18.79 4.41 1.93-8.3-8.99-2.11c3.7-1.11 6.85-3.51 8.92-6.69v5.8h30.11v-8.75H47.09V49h13.13v-9.18H47.09v-1.67h13.13v-9.11h-8.67c4.14-1.91 7.27-5.64 8.37-10.17s.32-1.03.43-3.79V.02H46.51Zm-16.41 29v6.78a16.231 16.231 0 0 0-8.32-6.5c4.29-1.73 7.6-5.38 8.9-9.88 1.22 4.27 4.26 7.77 8.22 9.61h-8.79Z" />
    </Box>
  )
}

export default Logo
