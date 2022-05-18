module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        covers: '#404040',
      },
      spacing: {
        66: '26rem',
        80: '20rem',
        88: '38rem',
        99: '30rem',
      },
      inset: {
        100: 100,
      },
      width: {
        '8.5/12': '70%',
      },
      fontFamily: {
        nassimBold: ['Nassim Bold'],
        nassimRegular: ['Nassim Regular'],
      },
    },
  },
  variants: {
    margin: ['responsive', 'hover', 'focus'],
    filter: ['hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'content/**/**/*.md',
    ],
  },
  mode: 'jit',
}
