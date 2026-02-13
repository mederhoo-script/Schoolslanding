import { getSchoolData } from '@/lib/schoolData';

export default function Academics() {
  const school = getSchoolData();

  return (
    <section 
      id="academics" 
      className="h-screen flex items-center justify-center snap-start snap-always"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            {school.sections.academics.title}
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-text)' }}
          >
            {school.sections.academics.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {school.sections.academics.programs.map((program, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '2px solid',
                borderColor: 'var(--color-primary)'
              }}
            >
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                {program.name}
              </h3>
              <p 
                className="mb-6"
                style={{ color: 'var(--color-text)' }}
              >
                {program.description}
              </p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start"
                    style={{ color: 'var(--color-text)' }}
                  >
                    <svg
                      className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
