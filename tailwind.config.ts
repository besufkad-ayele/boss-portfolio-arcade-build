
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
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
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
				// Professional Slate/Blue Dark Theme
				neon: {
					pink: '#3b82f6',      // Blue
					teal: '#2563eb',      // Dark blue
					blue: '#60a5fa',      // Light blue
					purple: '#1e40af',    // Navy blue
					green: '#3b82f6',     // Blue
				},
				// Flat aliases used across components - Professional Blue palette
				'neon-pink': '#3b82f6',      // Blue
				'neon-teal': '#2563eb',      // Dark blue
				'neon-blue': '#60a5fa',      // Light blue
				'neon-purple': '#1e40af',    // Navy blue
				'neon-green': '#3b82f6',     // Blue
				dark: {
					primary: '#0F172A',      // Slate 900
					secondary: '#1E293B',    // Slate 800
					accent: '#334155',       // Slate 700
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 10px #3b82f6' },
					'50%': { boxShadow: '0 0 20px #3b82f6, 0 0 30px #3b82f6' },
				},
				'level-up': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.1)', opacity: '0.8' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 3s ease-in-out infinite',
				glow: 'glow 2s ease-in-out infinite alternate',
				'level-up': 'level-up 0.5s ease-in-out',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				bounce: 'bounce 1s infinite',
				'slide-in': 'slide-in 0.5s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
			},
			fontFamily: {
				'game': ['Orbitron', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
