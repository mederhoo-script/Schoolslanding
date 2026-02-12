import { getSchoolData } from '@/lib/schoolData';

export default function Hero() {
  const school = getSchoolData();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${school.images.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Welcome to {school.name}
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-white">
          {school.motto}
        </p>
        <p className="text-lg md:text-xl mb-12 text-white max-w-3xl mx-auto">
          {school.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${school.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#ffffff'
            }}
          >
            Enroll Your Child Today
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity border-2"
            style={{
              borderColor: '#ffffff',
              color: '#ffffff'
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
