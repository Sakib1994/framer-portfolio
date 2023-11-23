"use client";
import { projectsData } from "@/lib/data"
import { Project } from './project'
import { useSectionInView } from '@/lib/hooks'
import { Fragment } from "react";
import ContainerSection from "./section";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5); //

  return (
    <ContainerSection sectionName="My projects" ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </ContainerSection>
  )
}
