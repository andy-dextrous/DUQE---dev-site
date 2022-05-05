export const Button = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    transformOrigin: "center",
    letterSpacing: "0",
    borderRadius: "10px",
    zIndex: 1,
    position: "relative",
    overflow: "hidden",
    _active: { transform: "scale(0.92)" },
    _after: {
      content: "''",
      width: "100%",
      height: "100%",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transition: "transform .15s cubic-bezier(.785,.135,.15,.86)",
      transformOrigin: "left center",
      position: "absolute",
      transform: "scale(1)",
      zIndex: "-1",
      borderRadius: "10px",
    },
    _before: {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: "-2",
    },
    _hover: {
      transform: "scale(0.98)",
      _after: {
        transform: "scaleX(0)",
        transformOrigin: "right center",
      },
    },
  },
  variants: {
    primary: {
      bg: "brandBlue.default",
      color: "dark.default",
      p: { color: "dark.default" },
      _before: { bg: "brandBlue.500" },
      _after: { bg: "brandBlue.default" },
    },
    secondary: {
      bg: "brandYellow.default",
      color: "dark.default",
      p: { color: "dark.default" },
      _before: { bg: "white" },
      _after: { bg: "brandYellow.default" },
    },
    outlineWhite: {
      bg: "transparent",
      border: "1px solid white",
      color: "white",
      p: { color: "white" },
      _before: { bg: "transparent" },
      _after: { bg: "transparent" },
    },
    outlineDark: {
      bg: "transparent",
      border: "1px solid",
      borderColor: "dark.default",
      color: "dark.default",
    },
    circle: {
      bg: "white",
      svg: { fill: "dark.default" },
      borderRadius: "full",
    },
    menuToggle: {
      width: ["2.7rem", "2.7rem", "3.25rem"],
      height: ["2.7rem", "2.7rem", "3.25rem"],
      lineHeight: ["2.7rem", "2.7rem", "3.25rem"],
      borderRadius: "50%",
      p: 0,
      border: 0,
      bg: "transparent",
      transition: "background .3s ease-out",
      overflow: "hidden",
      _focus: { outline: "none", border: "none", boxShadow: "none" },
      svg: {
        zIndex: 10,
        transform: ["scale(0.8)", "scale(0.8)", "scaleX(01.1)"],
        transition: "all .3s ease",
        pointerEvents: "none",
      },
      "&:before": {
        content: '""',
        borderRadius: "50%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        bg: ["transparent", "transparent", "brandYellow.default"],
        opacity: [1, 1, 0],
        zIndex: -2,
        transform: ["scale(1)", "scale(1)", "scale(0)"],
        transformOrigin: "50% 50%",
        transition: "all .3s ease",
        pointerEvents: "none",
      },
      "&:after": {
        content: '""',
        borderRadius: "50%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        bg: ["transparent", "transparent", "brandYellow.default"],
        opacity: 0,
        zIndex: -1,
        transform: "scale(0)",
        transformOrigin: "50% 50%",
        transition: "all .3s ease",
        pointerEvents: "none",
      },
      ":hover": {
        "&:before": {
          transform: "scale(1)",
          opacity: 1,
          bg: "brandYellow.default",
        },
        "&:after": {
          bg: "brandYellow.default",
        },
        svg: {
          transform: "scaleX(0.8)",
        },
      },
      "&.active": {
        borderColor: "transparent",
        "&:after": {
          transform: "scale(1)",
          opacity: 1,
        },
        svg: {
          transform: "scale(1.2)",
          rect: {
            fill: "white",
          },
        },
      },
    },
  },
  sizes: {
    lg: {
      px: 8,
      py: 4,
      fontSize: "16",
    },
    sm: {
      px: 6,
      py: 5,
      fontSize: "14",
    },
  },

  defaultProps: {
    variant: "primary",
    size: "lg",
  },
}
