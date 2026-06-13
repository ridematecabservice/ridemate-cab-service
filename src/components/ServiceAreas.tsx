import { MapPin } from 'lucide-react';

const areas = [
  {
    city: 'Mathura',
    tagline: "Lord Krishna's Birthplace",
    description: 'Local taxi, temple tours, station transfers and more.',
    highlight: true,
  },
  {
    city: 'Vrindavan',
    tagline: 'City of Temples',
    description: 'Dedicated temple tour circuits and pilgrimage trips.',
    highlight: false,
  },
  {
    city: 'Agra',
    tagline: 'City of the Taj Mahal',
    description: 'Taj Mahal tours, Agra Fort, and inter-city routes.',
    highlight: false,
  },
  {
    city: 'Delhi',
    tagline: "India's Capital",
    description: 'Airport pickups, city transfers and outstation cabs.',
    highlight: false,
  },
  {
    city: 'Jaipur',
    tagline: 'The Pink City',
    description: 'Heritage tours, Amer Fort and inter-state routes.',
    highlight: false,
  },
];

const ServiceAreas = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">We Serve</h2>
        <p className="section-subheading">
          Providing safe, reliable and affordable taxi services across North India
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {areas.map((area) => (
            <div
              key={area.city}
              className={`rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                area.highlight
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  area.highlight ? 'bg-white/20' : 'bg-primary-50'
                }`}
              >
                <MapPin
                  className={`h-7 w-7 ${area.highlight ? 'text-white' : 'text-primary-600'}`}
                  strokeWidth={2}
                />
              </div>

              <h3
                className={`text-lg font-bold mb-1 ${
                  area.highlight ? 'text-white' : 'text-gray-900'
                }`}
              >
                {area.city}
              </h3>

              <p
                className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
                  area.highlight ? 'text-white/80' : 'text-accent-500'
                }`}
              >
                {area.tagline}
              </p>

              <p
                className={`text-sm leading-relaxed ${
                  area.highlight ? 'text-white/80' : 'text-gray-500'
                }`}
              >
                {area.description}
              </p>

              <a
                href={`https://wa.me/918218042225?text=Hi%2C%20I%20need%20a%20taxi%20in%20${encodeURIComponent(area.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 text-xs font-semibold px-4 py-2 rounded-lg transition-colors ${
                  area.highlight
                    ? 'bg-white text-primary-600 hover:bg-gray-100'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
