
import HeadlineSection from '@/components/sections/headline-section';
import InstructorBioSection from '@/components/sections/instructor-bio-section';
import ValuePropositionSection from '@/components/sections/value-proposition-section';
import WorkshopCurriculumSection from '@/components/sections/workshop-curriculum-section';
import CtaSection from '@/components/sections/cta-section';

export default function KickoffWorkshopPage() {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <HeadlineSection />
      <InstructorBioSection />
      <ValuePropositionSection />
      <WorkshopCurriculumSection />
      <CtaSection />
    </div>
  );
}
