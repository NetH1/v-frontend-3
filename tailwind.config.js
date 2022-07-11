module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        'bacg': 'rgba(0,0,0, 0.8)',
        'bacf': '#424245',
        'headtext': '#f5f5f7',
        'links': '#06c',
        'ipink': '#fec2eb',
        'ired': '#cc2127',
        'headbor': 'rgba(255, 255, 255, 0.24)',
        'info': '#86868b',
        'neblack': '#1d1d1f',
        'knopka': '#0071e3',
        'sierrablue': '#a7c1d9',
        'silver': '#f1f2ed',
        'gold': '#fae7cf',
        'graphite': '#54524f',
        'wiht': '#fbfbfd',
      },
      width:{
        'setblock': '49%'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
