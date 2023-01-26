import { extendTheme } from "@chakra-ui/react";


// for this app i'd like to go with a synthwave theme

const theme = extendTheme({
  colors: {
    brand: {
      50: "#000000",
      100: "#000000",
      200: "#000000",
      300: "#000000",
      400: "#7DF9FF", // electric blue
      500: "#FF00FF", // fuchsia 
      600: "#BF00FF", // electric purple
      700: "#FFFF00", // yellow
      800: "#FF69B4", // hot pink
      900: "#39FF14", // electric green
    },
  },
  styles: {
    global: {
      body: {
        bg: "#311B92", // dark purple
      },
    },
  },
  fonts: {
    heading: `'BIZ UDPMincho', sans-serif`,
    body: `'BIZ UDPMincho', sans-serif`,
  },
  components: {
    Button: {
      variants: {
        brand: {
          transition: "all 0.2s",
          bg: "brand.500",
          color: "blackAlpha.700",
          shadow: "lg",
          borderWidth: "1px",
          borderColor: "blackAlpha.100",
          _hover: {
            shadow: "md",
          },
        },
      },
    },
    Link: {
      variants: {
        brand: {
          transition: "all 0.2s",
          bg: "brand.500",
          color: "blackAlpha.700",
          shadow: "lg",
          borderWidth: "1px",
          borderColor: "blackAlpha.100",
          _hover: {
            shadow: "md",
          },
        },
      },
    },
  },
});

export default theme;
