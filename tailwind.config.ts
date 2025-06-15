import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
      sans: ['Poppins', 'Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        fire: {
          light: "#FFE1BD",
          DEFAULT: "#FF6F00",
          dark: "#B35600",
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "enter": {
          "0%": { opacity: "0", transform: "scale(0.95) translateY(40px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.92)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "bounce-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" }
        },
        "pulse": {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.65 }
        }
      },
      animation: {
        'fade-in': "fade-in 0.6s cubic-bezier(.45,.05,.55,.95)",
        'enter': "enter 0.55s cubic-bezier(.32,.72,.38,1.06)",
        'scale-in': "scale-in 0.2s ease-out",
        'bounce-slow': "bounce-slow 1.1s infinite",
        'pulse': "pulse 2s cubic-bezier(.4,0,.6,1) infinite"
      },
      backgroundImage: {
        'fire-gradient': "linear-gradient(90deg,#ffe4db 0%,#fc562b 48%,#ad2f0b 100%)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
