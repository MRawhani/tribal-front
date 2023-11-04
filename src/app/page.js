import Hero from '@/components/home/Hero'
import About from '@/components/global/About'
import QuickLinks from '@/components/home/QuickLinks'
import Articles from '@/components/home/Articles'
import Reports from '@/components/home/Reports'
import Photos from '@/components/home/Photos'
import BookChapters from '@/components/home/BookChapters'
import UnpublishedResearch from '@/components/home/UnpublishedResearch'
import PolicyPapers from '@/components/home/PolicyPapers'
import Interviews from '@/components/home/Interviews'
import Stories from '@/components/home/Stories'

export default async function Home() {
  return (
    <main className='-mt-8  md:-mb-16'>
      <Hero />
      <About />
      <QuickLinks />
      <Articles />
      <Reports />
      <Photos />
      <BookChapters />
      <UnpublishedResearch />
      <PolicyPapers />
      <Interviews />
      <Stories />
    </main>
  )
}
