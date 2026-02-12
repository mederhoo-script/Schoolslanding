import { getSchoolData } from '@/lib/schoolData';

export default function Footer() {
  const school = getSchoolData();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-12 border-t"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={school.images.logo} 
                alt={`${school.name} Logo`}
                className="h-10 w-auto"
              />
              <div>
                <h3 
                  className="text-lg font-bold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {school.name}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--color-text)' }}
                >
                  {school.motto}
                </p>
              </div>
            </div>
            <p 
              className="text-sm mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              {school.description}
            </p>
          </div>

          <div>
            <h4 
              className="text-lg font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-text)' }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#academics" 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-text)' }}
                >
                  Academics
                </a>
              </li>
              <li>
                <a 
                  href="#facilities" 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-text)' }}
                >
                  Facilities
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-text)' }}
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="text-lg font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li style={{ color: 'var(--color-text)' }}>
                {school.contact.phone}
              </li>
              <li style={{ color: 'var(--color-text)' }}>
                {school.contact.email}
              </li>
              <li style={{ color: 'var(--color-text)' }}>
                {school.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="pt-8 border-t text-center"
          style={{ borderColor: 'var(--color-primary)' }}
        >
          <p 
            className="text-sm"
            style={{ color: 'var(--color-text)' }}
          >
            © {currentYear} {school.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
