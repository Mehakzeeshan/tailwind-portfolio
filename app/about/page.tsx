import Navbar from "../components/navbar";
import AboutSection from "../components/aboutSection";
import Footer from "../components/footer";

import React from 'react'

const About = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
     <div className="container mt-24 mx-auto px-2 py-2">
     <AboutSection />
     </div>
     <Footer />
    </main>
  )
}

export default About;