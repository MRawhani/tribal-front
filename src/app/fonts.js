import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
// Font files can be colocated inside of `pages`
const Pecita = localFont({
    src: '../../public/fonts/Pecita.otf',
    variable: '--font-pecita',
    
    display: 'swap'
  })
  const GothamBook = localFont({
    src: '../../public/fonts/GothamBook.ttf',
    variable: '--font-gothamBook',
    
    display: 'swap'
  })
  const GothamLight = localFont({
    src: '../../public/fonts/GothamLight.ttf',
    variable: '--font-gothamLight',
    
    display: 'swap'
  })
  const NCS = localFont({
    src: '../../public/fonts/NCS Radhiumz.ttf',
    variable: '--font-ncs',
    
    display: 'swap'
  })
  
  const open_Sans = Open_Sans({ subsets: ['latin'] })

  export const custom_fonts = ` ${Pecita.variable} ${GothamLight.variable} ${NCS.variable} ${GothamBook.variable}`
