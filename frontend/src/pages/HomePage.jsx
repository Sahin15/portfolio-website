import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { homeSeo } from '../data/seoConfig';
import HeroSection from '../sections/home/HeroSection';
import AboutSection from '../sections/home/AboutSection';
import ProjectsSection from '../sections/home/ProjectsSection';
import ExperienceSection from '../sections/home/ExperienceSection';
import SkillsSection from '../sections/home/SkillsSection';
import JourneyTimelineSection from '../sections/home/JourneyTimelineSection';
import ContactSection from '../sections/home/ContactSection';

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    }
  }, [hash]);

  return (
    <>
      <SEO
        title={homeSeo.title}
        description={homeSeo.description}
        ogTitle={homeSeo.ogTitle}
        ogDescription={homeSeo.ogDescription}
        ogType={homeSeo.ogType}
        canonicalPath={homeSeo.canonicalPath}
        ogImage={homeSeo.ogImage}
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <JourneyTimelineSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
