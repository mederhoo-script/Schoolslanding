import { getSchoolData } from '@/lib/schoolData';

export default function Contact() {
  const school = getSchoolData();

  return (
    <section 
      id="contact" 
      className="h-screen flex items-center justify-center snap-start snap-always"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Get In Touch
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-text)' }}
          >
            We'd love to hear from you. Contact us for admissions, inquiries, or to schedule a tour.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className="p-8 rounded-lg shadow-lg text-center"
            style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px solid',
              borderColor: 'var(--color-primary)'
            }}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--color-primary)' }}
            >
              Phone
            </h3>
            <p style={{ color: 'var(--color-text)' }}>
              {school.contact.phone}
            </p>
          </div>

          <div 
            className="p-8 rounded-lg shadow-lg text-center"
            style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px solid',
              borderColor: 'var(--color-primary)'
            }}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--color-primary)' }}
            >
              Email
            </h3>
            <p style={{ color: 'var(--color-text)' }}>
              {school.contact.email}
            </p>
          </div>

          <div 
            className="p-8 rounded-lg shadow-lg text-center"
            style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px solid',
              borderColor: 'var(--color-primary)'
            }}
          >
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--color-primary)' }}
            >
              Address
            </h3>
            <p style={{ color: 'var(--color-text)' }}>
              {school.contact.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
