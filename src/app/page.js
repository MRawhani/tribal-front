import Hero from '@/components/home/Hero'
import About from '@/components/global/About'
import QuickLinks from '@/components/home/QuickLinks'
import Articles from '@/components/home/Articles'
import Reports from '@/components/home/Reports'

export default async function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* 
      <QuickLinks />
      <Articles />
      <Reports /> */}
    </main>
  )
}
