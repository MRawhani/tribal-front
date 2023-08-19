import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Image from 'next/image'
import QuickLinks from '@/components/home/QuickLinks'
import Articles from '@/components/home/Articles'

export default function Home() {
  
  return (
    <main >
     <Hero />
     <About />
     <QuickLinks />
     <Articles />
 

    </main>
  )
}
