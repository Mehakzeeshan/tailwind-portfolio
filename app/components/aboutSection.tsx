"use client";
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import TabButtons from './tabButtons';
import { title } from 'process';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React.js</li>
                <li>Next.js</li>
                </div>
            
        )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <div className='list-disc pl-2'>
            <h3><li>SSC in Medical Science</li></h3>
            <p>Kutiyana Memon Academy</p>
            
            <h3><li>Intermediate in Pre-Medical </li></h3>
            <p>SAI Sir Adamjee Institute</p>
           
            <h3><li>Associate Degree Program in Psychology </li></h3>
            <p>Virtual University Of Pakistan</p> 
            
            </div>
        )
    },

    {
        title: "Courses",
        id: "courses",
        content: (
            <div className='list-disc pl-2'>
                <li>HTML CSS and Javascript from PIAIC</li>
                <li>Web 3.0, Metaverse and Artificial Intelligence from GIAIC</li>
            </div>
        )
    },



]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className="text-white" id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <Image src="/images/about-pic.jpg" alt="About page picture" width={500} height={500} />
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-900 text-center'><br/>About Me</h2>
            <p className='text-base lg:text-lg'>
               Hi, I'm Mehak Noor Mohammad, a passionate web designer and aspiring full-stack web developer. 
               My focus lies in crafting clean, intuitive, and user-friendly web applications that provide 
               seamless user experiences. I enjoy the challenge of turning creative ideas into functional 
               and visually appealing websites. With a strong foundation in both front-end and back-end 
               development, I'm committed to growing my expertise in full-stack development.
               </p>
               <p className='text-base lg:text-lg' >
               Currently, I'm diving deep into the latest advancements in technology, including Web 3.0,
               metaverse, cloud computing, and artificial intelligence.As I continue 
               to learn and grow, I aim to bring a balance of creativity and technical skill to every project,
               always pushing myself to innovate and improve.
               </p>
               <p className='text-base lg:text-lg'>
               Let's connect and explore the future of web development together!
               </p>
               <div className='flex flex-row justify-start mt-8'>

                <TabButtons selectTab={() => handleTabChange("skills")} active= {tab === "skills"}>
                {""} Skills {""}
                </TabButtons>

                <TabButtons selectTab={() => handleTabChange("education")} active= {tab === "education"}>
                {""} Education {""}
                </TabButtons>

                <TabButtons selectTab={() => handleTabChange("courses")} active= {tab === "courses"}>
                {""} Courses {""}
                </TabButtons>
                </div>
                <div className='mt-8'>
                  {TAB_DATA.find((t) => t.id === tab)?.content || 'Content not found'}
                </div>

          </div>
        </div>
     </section>
  )
}

export default AboutSection