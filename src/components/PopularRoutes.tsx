import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const routes = [
  {
    from: 'Delhi',
    to: 'Agra',
    distance: '230 km',
    duration: '4-5 hours',
    highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'],
  },
  {
    from: 'Delhi',
    to: 'Mathura',
    distance: '160 km',
    duration: '3-4 hours',
    highlights: ['Krishna Temple', 'Vrindavan', 'Prem Mandir'],
  },
  {
    from: 'Delhi',
    to: 'Jaipur',
    distance: '280 km',
    duration: '5-6 hours',
    highlights: ['Amer Fort', 'Hawa Mahal', 'City Palace'],
  },
  {
    from: 'Mathura',
    to: 'Vrindavan',
    distance: '15 km',
    duration: '30 mins',
    highlights: ['Banke Bihari', 'ISKCON Temple', 'Nidhivan'],
  },
  {
    from: 'Agra',
    to: 'Jaipur',
    distance: '240 km',
    duration: '4-5 hours',
    highlights: ['Fatehpur Sikri', 'Abhaneri Stepwell', 'Chand Baori'],
  },
  {
    from: 'Mathura',
    to: 'Delhi Airport',
    distance: '180 km',
    duration: '4-5 hours',
    highlights: ['IGI Airport', 'Expressway', 'Comfortable Ride'],
  },
  {
    from: 'Vrindavan',
    to: 'Agra',
    distance: '70 km',
    duration: '1.5-2 hours',
    highlights: ['Taj Mahal', 'Agra Fort', 'Local Temples'],
  },
];

const PopularRoutes = ({ showAll = false }: { showAll?: boolean }) => {
  const displayedRoutes = showAll ? routes : routes.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Popular Routes</h2>
        <p className="section-subheading">
          Most travelled routes with best-in-class service
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedRoutes.map((route, index) => (
            <div key={index} className="card p-6 hover:border-primary-200 border-2 border-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-gray-900">{route.from}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent-500" />
                  <span className="font-semibold text-gray-900">{route.to}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Distance:</span>
                  <span>{route.distance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Duration:</span>
                  <span>{route.duration}</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-4">
                <span className="font-medium">Highlights: </span>
                <span className="text-gray-500">{route.highlights.join(', ')}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <a
                  href={`https://wa.me/918218042225?text=Hi,%20I%20want%20to%20book%20${route.from}%20to%20${route.to}%20trip`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <Link to="/routes" className="btn-outline">
              View All Routes
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularRoutes;
