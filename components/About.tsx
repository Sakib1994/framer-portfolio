"use client"
import { motion } from 'framer-motion';
import SectionHeading from './Section-heading';
import { useSectionInView } from '@/lib/hooks';

export const About = () => {
    const { ref } = useSectionInView("About");
    return (
        <motion.section ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Computer Science</span>, I decided to pursue my
                passion for programming. I learned{" "} <span className="font-medium">Japanese language and Business culture</span>{" "} to work in Japan.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Vue.js, Nuxt, Node.js, and Postgres
                </span>
                . I am well-equipped with TypeScript, Prisma and Drizzle. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software Engineer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy Traveling, watching movies, and playing Badminton. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">Cloud Engineering and Information Security</span>.
                {/* I'm also learning how to play the guitar. */}
            </p>
        </motion.section>
    )
}
