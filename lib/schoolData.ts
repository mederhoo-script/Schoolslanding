import schoolData from '@/content/school.json';

export interface SchoolContact {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}

export interface SchoolTheme {
  primary: string;
  secondary: string;
  accent: string;
  backgroundLight: string;
  backgroundDark: string;
  textLight: string;
  textDark: string;
}

export interface Facility {
  name: string;
  image: string;
  description: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface SchoolImages {
  logo: string;
  hero: string;
  slides: HeroSlide[];
  about: string;
  gallery: string[];
  facilities: Facility[];
}

export interface AcademicProgram {
  name: string;
  description: string;
  features: string[];
}

export interface SchoolData {
  name: string;
  motto: string;
  description: string;
  contact: SchoolContact;
  theme: SchoolTheme;
  images: SchoolImages;
  sections: {
    about: {
      title: string;
      content: string;
    };
    academics: {
      title: string;
      description: string;
      programs: AcademicProgram[];
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}

export function getSchoolData(): SchoolData {
  return schoolData as SchoolData;
}
