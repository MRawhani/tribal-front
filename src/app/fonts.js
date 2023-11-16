import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'

const GothamBold = localFont({
    src: '../../public/fonts/GothamBold.ttf',
    variable: '--font-gothamBold',
    
    display: 'swap'
  })
const GothamMedium = localFont({
    src: '../../public/fonts/GothamMedium.ttf',
    variable: '--font-gothamMedium',
    
    display: 'swap'
  })
  const NCS = localFont({
    src: '../../public/fonts/NCS Radhiumz.ttf',
    variable: '--font-ncs',
    
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
 
  
  const open_Sans = Open_Sans({ subsets: ['latin'] })

  export const custom_fonts = `${GothamMedium.variable} ${GothamBold.variable} ${GothamLight.variable} ${NCS.variable} ${GothamBook.variable}`
