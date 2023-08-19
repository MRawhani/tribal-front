import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Image from 'next/image'
import QuickLinks from '@/components/home/QuickLinks'

export default function Home() {
  
  return (
    <main >
     <Hero />
     <About />
     <QuickLinks />
 

    </main>
  )
}
