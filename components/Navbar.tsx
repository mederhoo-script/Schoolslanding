import Link from 'next/link';
import { getSchoolData } from '@/lib/schoolData';

export default function Navbar() {
  const school = getSchoolData();

  return (
    <nav 
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            {/* Using native img tag for static export compatibility */}
            <img 
              src={school.images.logo} 
              alt={`${school.name} Logo`}
              className="h-10 w-auto"
            />
            <div>
              <h1 
                className="text-lg font-bold"
                style={{ color: 'var(--color-primary)' }}
              >
                {school.name}
              </h1>
              <p className="text-xs" style={{ color: 'var(--color-text)' }}>
                {school.motto}
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-text)' }}
            >
              About
            </a>
            <a 
              href="#academics" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-text)' }}
            >
              Academics
            </a>
            <a 
              href="#facilities" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-text)' }}
            >
              Facilities
            </a>
            <a 
              href="#gallery" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-text)' }}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-text)' }}
            >
              Contact
            </a>
            <a
              href={`https://wa.me/${school.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff'
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
