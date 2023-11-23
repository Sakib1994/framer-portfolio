"use client";

import { Chrono } from "react-chrono";
import { experiencesDataChrono } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import ContainerSection from './section';

export function Experience() {
    const { ref } = useSectionInView("Experience");
    return (
        <ContainerSection sectionName="My experience" ref={ref} id='experience'>
            <div>
                <Chrono mode="VERTICAL_ALTERNATING" items={experiencesDataChrono} />
            </div>
        </ContainerSection>
    )
}
