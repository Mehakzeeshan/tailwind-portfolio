import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar"
import Footer from "./components/footer";
import AchievementsSection from "./components/achievementSection";
import AboutSection from "./components/aboutSection";
import EmailSection from "./components/emailSection";
import ProjectSection from "./components/projectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
     <div className="container mt-24 mx-auto px-10 pb-20">
     <HeroSection />
     <AchievementsSection />
     {<AboutSection />}
     {<ProjectSection />}
     {<EmailSection />}
     </div>
     <Footer />
    </main>
  )
};

