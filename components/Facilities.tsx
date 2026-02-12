import { getSchoolData } from '@/lib/schoolData';

export default function Facilities() {
  const school = getSchoolData();

  return (
    <section 
      id="facilities" 
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Our Facilities
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-text)' }}
          >
            State-of-the-art facilities designed to enhance learning and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {school.images.facilities.map((facility, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div 
                className="p-6"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {facility.name}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--color-text)' }}
                >
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
