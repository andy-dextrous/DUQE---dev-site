import { Box } from "@chakra-ui/react"
import React from "react"

const CrossIcon = React.forwardRef(
  (
    {
      width = 500,
      height = 500,
      color = "dark.default",
      outline = false,
      strokeSize = 1,
      ...styles
    },
    ref
  ) => {
    return (
      <Box
        as="svg"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        viewBox="0 0 500 500"
        {...styles}
      >
        <path style={{ fill: "none" }} d="M.71.71H499.3V499.3H.71z" />
        <path
          vectorEffect="non-scaling-stroke"
          style={{ stroke: color, fill: outline ? "none" : color }}
          strokeWidth={strokeSize}
          d="m499.293 147.396-102.27 102.27-.353.354.353.353 102.27 102.231-146.689 146.689-102.27-102.231-.353-.353-.354.353-102.231 102.231L.707 352.604l102.231-102.231.353-.353-.353-.354L.707 147.396 147.396.707l102.231 102.27.354.353.353-.353L352.604.707l146.689 146.689Z"
        />
      </Box>
    )
  }
)

export default CrossIcon
