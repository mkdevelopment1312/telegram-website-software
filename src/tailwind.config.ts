
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
				neon: {
					green: 'hsl(var(--neon-green))',
					blue: 'hsl(var(--neon-blue))',
					purple: 'hsl(var(--neon-purple))',
					pink: 'hsl(var(--neon-pink))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				orbitron: ['Orbitron', 'monospace'],
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
				'floating': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-15px) rotate(1deg)' },
					'66%': { transform: 'translateY(-5px) rotate(-1deg)' }
				},
				'pulse-neon': {
					'0%': { 
						textShadow: '0 0 5px hsl(var(--neon-green) / 0.6)',
						transform: 'scale(1)'
					},
					'100%': { 
						textShadow: '0 0 10px hsl(var(--neon-green) / 0.8), 0 0 20px hsl(var(--neon-green) / 0.6), 0 0 30px hsl(var(--neon-green) / 0.4)',
						transform: 'scale(1.03)'
					}
				},
				'slide-up': {
					'from': {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'fade-in': {
					'from': { 
						opacity: '0',
						filter: 'blur(5px)'
					},
					'to': { 
						opacity: '1',
						filter: 'blur(0)'
					}
				},
				'scale-in': {
					'from': {
						opacity: '0',
						transform: 'scale(0.8) rotate(-5deg)'
					},
					'to': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'grid-move': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(50px, 50px)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px hsl(var(--neon-green) / 0.4), 0 0 15px hsl(var(--neon-green) / 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 20px hsl(var(--neon-green) / 0.6), 0 0 40px hsl(var(--neon-green) / 0.4), 0 0 60px hsl(var(--neon-green) / 0.2)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'floating': 'floating 6s ease-in-out infinite',
				'floating-delayed': 'floating 8s ease-in-out infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-up-delayed': 'slide-up 0.8s ease-out 0.2s both',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-in-delayed': 'fade-in 1s ease-out 0.3s both',
				'scale-in': 'scale-in 0.5s ease-out',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				'grid-move': 'grid-move 20s linear infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
