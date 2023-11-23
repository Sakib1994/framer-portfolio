"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import ContainerSection from './section'

const StaticProfile = "https://avatars.githubusercontent.com/u/38373843?v=4";
export function Hero() {
    const { ref } = useSectionInView("Home");
    return (
        <ContainerSection ref={ref} className="mb-28 scroll-mt-28 max-w-3xl text-center sm:mb-0" id="home">
            <div className="flex items-center justify-center">
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Image src={process.env.PROFILE_PIC ?? StaticProfile}
                            alt="Sakib portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl' />
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
                            className='text-4xl absolute bottom-0 right-0'>👋</motion.span>
                    </motion.div>
                </div>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"                    >
                <span className="font-bold">Hello, I&apos;m Md. Nazmus Sakib.</span> I&apos;m a{" "}
                <span className="font-bold">Full-stack developer</span> with{" "}
                <span className="font-bold">4 years</span> of experience. I enjoy
                building <span className="italic">sites & APIs</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>, <span className="underline">Vue.js (Nuxt)</span> and <span className="underline">Node.js</span>.
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                // onClick={() => {
                //     setActiveSection("Contact");
                //     setTimeOfLastClick(Date.now());
                // }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
                    href="/Sakib_cv.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-slate-100"
                    href="https://linkedin.com/in/md-nazmus-sakib-59020316b"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-slate-100"
                    href="https://github.com/Sakib1994"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </ContainerSection>
    )
}