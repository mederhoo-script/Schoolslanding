import { getSchoolData } from '@/lib/schoolData';

export default function About() {
  const school = getSchoolData();

  return (
    <section 
      id="about" 
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: 'var(--color-primary)' }}
            >
              {school.sections.about.title}
            </h2>
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              {school.sections.about.content}
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  20+
                </div>
                <div 
                  className="text-sm"
                  style={{ color: 'var(--color-text)' }}
                >
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  500+
                </div>
                <div 
                  className="text-sm"
                  style={{ color: 'var(--color-text)' }}
                >
                  Students
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  50+
                </div>
                <div 
                  className="text-sm"
                  style={{ color: 'var(--color-text)' }}
                >
                  Staff Members
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={school.images.about}
              alt="About our school"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
