import { Car, Plane, MapPin, ArrowRight, RefreshCcw, Map, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  accentBg: string;
}

const services: Service[] = [
  {
    icon: Car,
    title: 'Local Taxi Service',
    description: 'Comfortable and affordable rides for daily commute, shopping, and local sightseeing within the city.',
    iconBg: 'bg-primary-600',
    iconColor: 'text-white',
    accentBg: 'bg-primary-50',
  },
  {
    icon: Plane,
    title: 'Airport Pickup & Drop',
    description: 'On-time airport transfers with flight tracking, meet & greet, and luggage assistance at all major airports.',
    iconBg: 'bg-accent-500',
    iconColor: 'text-white',
    accentBg: 'bg-accent-50',
  },
  {
    icon: MapPin,
    title: 'Outstation Travel',
    description: 'Safe and comfortable long-distance journeys with experienced drivers across North India.',
    iconBg: 'bg-primary-600',
    iconColor: 'text-white',
    accentBg: 'bg-primary-50',
  },
  {
    icon: ArrowRight,
    title: 'One Way Trips',
    description: 'Cost-effective one-way travel with door-to-door pickup. Pay only for the distance you travel.',
    iconBg: 'bg-accent-500',
    iconColor: 'text-white',
    accentBg: 'bg-accent-50',
  },
  {
    icon: RefreshCcw,
    title: 'Round Trips',
    description: 'Flexible round trip packages with driver wait time included, ideal for day outings and business trips.',
    iconBg: 'bg-primary-600',
    iconColor: 'text-white',
    accentBg: 'bg-primary-50',
  },
  {
    icon: Map,
    title: 'Tour Packages',
    description: 'Curated tour packages for Delhi, Agra, Mathura & Jaipur. Golden Triangle, pilgrimage and heritage tours.',
    iconBg: 'bg-accent-500',
    iconColor: 'text-white',
    accentBg: 'bg-accent-50',
  },
];

const Services = ({ showAll = false }: { showAll?: boolean }) => {
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-subheading">
          Comprehensive cab and travel solutions for every journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-7 w-7 ${service.iconColor}`} strokeWidth={1.75} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
