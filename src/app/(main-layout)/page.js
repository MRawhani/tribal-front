// "use client";
import Hero from "@/components/home/Hero";
import About from "@/components/global/About";
import QuickLinks from "@/components/home/QuickLinks";
import Articles from "@/components/home/Articles";
import Reports from "@/components/home/Reports";
import Photos from "@/components/home/Photos";
import BookChapters from "@/components/home/BookChapters";
import UnpublishedResearch from "@/components/home/UnpublishedResearch";
import PolicyPapers from "@/components/home/PolicyPapers";
import Interviews from "@/components/home/Interviews";
import Stories from "@/components/home/Stories";
import { homeData } from "@/utils/data";
import { fetchClientData } from "@/utils/globalStore";

export default async function Home() {
  const data = await fetchClientData();

  const portfolioData = data?.portfolioData;
  console.log('d')
  const shortLinks = [
    {
      id: 1,
      name: "Reports",
      icon: "/icons/articles.svg",
      count: portfolioData.totalReports,
      path: "/reports",
    },
    {
      id: 3,
      name: "Book chapters",
      icon: "/icons/books.svg",
      count: portfolioData.totalBooks,
      path: "/book-chapters",
    },
    {
      id: 4,
      name: "Interviews",
      icon: "/icons/interviews.svg",
      count: portfolioData.totalInterviews,
      path: "/interviews",
    },
    {
      id: 7,
      name: "Stories",
      icon: "/icons/stories.svg",
      count: portfolioData.totalStories,
      path: "/stories",
    },
  ];

  return (
    <main className="-mb-8  md:-mb-16">
      {/* <Hero /> */}
      <About portfolioData={portfolioData} aboutData={homeData.aboutHomePage} />
      <QuickLinks shortLinks={shortLinks} portfolioData={portfolioData}/>
      <Articles portfolioData={portfolioData} />
      <Reports portfolioData={portfolioData} />
      <Interviews portfolioData={portfolioData} />
      <Stories portfolioData={portfolioData} />
    </main>
  );
}
