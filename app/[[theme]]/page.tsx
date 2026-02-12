import { getSchoolData } from '@/lib/schoolData';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Academics from '@/components/Academics';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

interface PageProps {
  params: {
    theme?: string[];
  };
}

export default function Page({ params }: PageProps) {
  const school = getSchoolData();
  const isDark = params.theme?.[0] === 'dark';

  const themeColors = {
    primary: school.theme.primary,
    secondary: school.theme.secondary,
    accent: school.theme.accent,
    bg: isDark ? school.theme.backgroundDark : school.theme.backgroundLight,
    text: isDark ? school.theme.textDark : school.theme.textLight,
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --color-primary: ${themeColors.primary};
          --color-secondary: ${themeColors.secondary};
          --color-accent: ${themeColors.accent};
          --color-bg: ${themeColors.bg};
          --color-text: ${themeColors.text};
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Facilities />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

// Generate static params for both light and dark themes
export async function generateStaticParams() {
  return [
    { theme: [] },        // for /
    { theme: ['dark'] },  // for /dark
  ];
}
