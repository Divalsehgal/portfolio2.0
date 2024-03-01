import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// Define interface for color variables
interface Color {
  light: string;
  dark: string;
}

// Define interface for color scheme
interface ColorScheme {
  primary: Color;
  secondary: Color;
  tertiary: Color;
}

// Define interface for configuration object
interface MyConfig extends Config {
  theme: {
    container: {
      center: boolean;
      padding: string;
      screens: {
        '2xl': string;
      };
    };
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: string };
          to: { height: string };
        };
        'accordion-up': {
          from: { height: string };
          to: { height: string };
        };
      };
      animation: {
        'accordion-down': string;
        'accordion-up': string;
      };
      fontFamily: {
        sans: string[];
      };
      colors?: any; // Update type to match expected Tailwind CSS configuration
    };
  };
}

// Define configuration object
const config: MyConfig = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          light: "#EB5E55", // Light primary color
          dark: "#333333", // Dark primary color
        },
        secondary: {
          light: "#3A3335", // Light secondary color
          dark: "#555555", // Dark secondary color
        },
        tertiary: {
          light: "#FDF0D5", // Light tertiary color
          dark: "#999999", // Dark tertiary color
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
