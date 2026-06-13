import { useEffect } from 'react';
import { Car, Plane, MapPin, ArrowRight, RefreshCcw, Map, CheckCircle, LucideIcon } from 'lucide-react';

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  bestFor: string;
  accent: boolean;
}

const allServices: ServiceDetail[] = [
  {
    icon: Car,
    title: 'Local Taxi Service',
    description: 'Comfortable and affordable taxi service for local trips within your city. Perfect for daily commute, shopping, and local sightseeing.',
    features: ['AC Vehicles', 'Professional Drivers', 'GPS Tracking', 'Clean Interior', 'Timely Pickup'],
    bestFor: 'Daily commute, sightseeing, shopping trips',
    accent: false,
  },
  {
    icon: Plane,
    title: 'Airport Pickup & Drop',
    description: 'Timely airport transfers with flight tracking and meet & greet service. We monitor your flight and adjust pickup time accordingly.',
    features: ['Flight Tracking', 'Free Wait Time', 'Meet & Greet', 'Luggage Assistance', '24/7 Service'],
    bestFor: 'IGI, Jaipur, Agra airports',
    accent: true,
  },
  {
    icon: MapPin,
    title: 'Outstation Travel',
    description: 'Long distance travel with experienced drivers and well-maintained vehicles. Comfortable journeys across North India.',
    features: ['Experienced Drivers', 'Well-Maintained Vehicles', 'Roadside Assistance', 'Flexible Routes', 'Multiple Stops'],
    bestFor: 'Weekend getaways, pilgrimage, business travel',
    accent: false,
  },
  {
    icon: ArrowRight,
    title: 'One Way Trips',
    description: 'Cost-effective one-way trips with no return fare charges. Perfect for relocations and single-direction travel.',
    features: ['No Return Fare', 'Fixed Pricing', 'Door Pickup', 'Flexible Timings', 'Instant Booking'],
    bestFor: 'Relocation, one-way travel, drop-offs',
    accent: true,
  },
  {
    icon: RefreshCcw,
    title: 'Round Trips',
    description: 'Complete round trip packages with flexible timing and multiple stops. Driver stays with you throughout the journey.',
    features: ['Flexible Schedule', 'Multiple Stops', 'Driver Stay', 'Day Packages', 'Custom Routes'],
    bestFor: 'Family tours, business meetings, events',
    accent: false,
  },
  {
    icon: Map,
    title: 'Tour Packages',
    description: 'Customized tour packages for Delhi, Agra, Jaipur & Mathura. Complete travel solutions with sightseeing guides.',
    features: ['Customized Itinerary', 'Knowledgeable Guides', 'All Inclusive', 'Accommodation Booking', 'Sightseeing'],
    bestFor: 'Golden Triangle, Pilgrimage tours, Heritage tours',
    accent: true,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services - RideMate Cab Service Mathura';
  }, []);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-white font-medium mb-2">
            Safe Rides • Trusted Service • Affordable Fares
          </p>
          <p className="text-primary-100 text-lg max-w-3xl mx-auto">
            Complete taxi and travel solutions for every journey — from local rides to multi-city tours
          </p>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border-l-4 overflow-hidden hover:shadow-md transition-shadow duration-300"
                style={{ borderLeftColor: service.accent ? '#f97316' : '#2563eb' }}
              >
                <div className="p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex items-start gap-5 mb-5">
                    <div
                      className="p-4 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: service.accent ? '#f97316' : '#2563eb' }}
                    >
                      <service.icon className="h-8 w-8 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{service.title}</h2>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-5">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400 font-medium">Best for:</span>
                      <span className="text-gray-700">{service.bestFor}</span>
                    </div>
                    <a
                      href={`https://wa.me/918218042225?text=Hi,%20I%20want%20to%20book%20${encodeURIComponent(service.title)}%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2.5 px-5 flex-shrink-0 text-center"
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
