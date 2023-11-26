import { ReactNode, Ref, forwardRef } from 'react'
import SectionHeading from './Section-heading'

interface ISeectionProps {
    children: ReactNode,
    id: string,
    sectionName?: string,
    className?: string
}
const ContainerSection = forwardRef(({ children, id, className, sectionName }: ISeectionProps, ref: Ref<HTMLDivElement>) => {
    return (
        <section id={id} ref={ref} className={className ?? 'mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'}>
            {sectionName ? <SectionHeading>{sectionName}</SectionHeading> : ''}
            {children}
        </section>
    )
});
ContainerSection.displayName = "ContainerSection";
export default ContainerSection