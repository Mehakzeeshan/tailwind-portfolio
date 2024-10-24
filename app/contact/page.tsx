import Navbar from "../components/navbar";
import EmailSection from "../components/emailSection";
import Footer from "../components/footer";

import React from 'react'

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
     <div className="container mt-16 mx-auto px-2 py-2">
     <EmailSection />
     </div>
     <Footer />
    </main>
  )
}

export default Contact;