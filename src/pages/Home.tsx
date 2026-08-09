import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { CoursesSection } from '../components/home/CoursesSection';
import { BenefitsSection } from '../components/home/BenefitsSection';
import { LearningPath } from '../components/home/LearningPath';
import { AboutPreview } from '../components/home/AboutPreview';
import { CTASection } from '../components/home/CTASection';

export function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <CoursesSection />
      <BenefitsSection />
      <LearningPath />
      <AboutPreview />
      <CTASection />
    </main>
  );
}
