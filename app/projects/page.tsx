import Navbar from "../components/navbar";
import ProjectSection from "../components/projectSection";
import Footer from "../components/footer";

import React from 'react'

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
     <div className="container mt-24 mx-auto px-2 py-2 pb-32">
     <ProjectSection />
     </div>
     <Footer />
    </main>
  )
}

export default Projects;