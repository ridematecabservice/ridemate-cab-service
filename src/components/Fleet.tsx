import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';


/* ─── Vehicle silhouette icons (used when no photo is available) ──────────── */

const SedanIcon = () => (
  <svg viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M3 24 L6 16 L14 10 L50 10 L58 16 L61 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10 L17 5 L47 5 L50 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 6 L18 10 L29 10 L29 6 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.6" />
    <path d="M31 6 L31 10 L46 10 L46 6 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.6" />
    <line x1="3" y1="24" x2="61" y2="24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="15" cy="26" r="5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="15" cy="26" r="2" fill="currentColor" opacity="0.25" />
    <circle cx="49" cy="26" r="5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="49" cy="26" r="2" fill="currentColor" opacity="0.25" />
  </svg>
);

const MUVIcon = () => (
  <svg viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="3" y="6" width="58" height="18" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
    <rect x="5" y="8" width="17" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    <rect x="25" y="8" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    <rect x="42" y="8" width="17" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    <line x1="3" y1="24" x2="61" y2="24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="15" cy="26" r="5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="15" cy="26" r="2" fill="currentColor" opacity="0.25" />
    <circle cx="49" cy="26" r="5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="49" cy="26" r="2" fill="currentColor" opacity="0.25" />
  </svg>
);

const PremiumSUVIcon = () => (
  <svg viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M3 24 L3 12 L8 6 L56 6 L61 12 L61 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="6" x2="52" y2="6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="18" y1="4" x2="46" y2="4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    <line x1="3" y1="24" x2="61" y2="24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <rect x="5" y="8" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    <rect x="24" y="8" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    <rect x="43" y="8" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    <circle cx="15" cy="26" r="6" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="15" cy="26" r="2.5" fill="currentColor" opacity="0.25" />
    <circle cx="49" cy="26" r="6" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="49" cy="26" r="2.5" fill="currentColor" opacity="0.25" />
  </svg>
);

/* ─── Types ─────────────────────────────────────────────────────────────────── */

type VehicleType = 'sedan' | 'mpv' | 'muv' | 'suv';

interface Vehicle {
  name: string;
  type: VehicleType;
  typeLabel: string;
  capacity: string;
  description: string;
  image?: string;
}

const THEME: Record<VehicleType, { card: string; iconWrap: string; iconColor: string; badge: string }> = {
  sedan: {
    card: 'border-primary-100 hover:border-primary-300',
    iconWrap: 'bg-primary-50',
    iconColor: 'text-primary-600',
    badge: 'bg-primary-100 text-primary-700',
  },
  mpv: {
    card: 'border-accent-100 hover:border-accent-300',
    iconWrap: 'bg-accent-50',
    iconColor: 'text-accent-600',
    badge: 'bg-accent-100 text-accent-700',
  },
  muv: {
    card: 'border-primary-100 hover:border-primary-300',
    iconWrap: 'bg-primary-50',
    iconColor: 'text-primary-600',
    badge: 'bg-primary-100 text-primary-700',
  },
  suv: {
    card: 'border-accent-100 hover:border-accent-300',
    iconWrap: 'bg-accent-50',
    iconColor: 'text-accent-600',
    badge: 'bg-accent-100 text-accent-700',
  },
};

const ICON_MAP: Record<VehicleType, React.ComponentType> = {
  sedan: SedanIcon,
  mpv: MUVIcon,
  muv: MUVIcon,
  suv: PremiumSUVIcon,
};

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const vehicles: Vehicle[] = [
  {
    name: 'Swift Dzire',
    type: 'sedan',
    typeLabel: 'Sedan',
    capacity: '4 Passengers',
    description: 'Comfortable sedan for city and outstation travel.',
    image: 'https://images.overdrive.in/wp-content/uploads/2016/12/0_468_700_http-cdni.autocarindia.com-ExtraImages-20161227093034_swift1.jpg',
  },
  {
    name: 'Hyundai Aura',
    type: 'sedan',
    typeLabel: 'Sedan',
    capacity: '4 Passengers',
    description: 'Modern sedan with smooth ride quality.',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139133/aura-exterior-right-front-three-quarter-9.png',
  },
  {
    name: 'Hyundai Xcent',
    type: 'sedan',
    typeLabel: 'Sedan',
    capacity: '4 Passengers',
    description: 'Affordable and comfortable travel option.',
    image: 'https://imgd-ct.aeplcdn.com/664x415/n/2fhd7sa_1471629.jpg',
  },
  {
    name: 'Maruti Ertiga',
    type: 'mpv',
    typeLabel: 'MPV',
    capacity: '6-7 Passengers',
    description: 'Perfect for family trips and small groups.',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga-Tour/9617/1762858404297/front-left-side-47.jpg',
  },
  {
    name: 'Toyota Etios',
    type: 'sedan',
    typeLabel: 'Sedan',
    capacity: '4 Passengers',
    description: 'Reliable sedan for local and outstation journeys.',
    image: 'https://imgd.aeplcdn.com/664x374/cw/ec/24731/Toyota-Platinum-Etios-Exterior-119077.jpg',
  },
  {
    name: 'Toyota Innova',
    type: 'muv',
    typeLabel: 'MUV',
    capacity: '6-7 Passengers',
    description: 'Spacious and comfortable premium travel.',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Hycross/12719/1776918655192/front-left-side-47.jpg',
  },
  {
    name: 'Toyota Innova Crysta',
    type: 'suv',
    typeLabel: 'Premium SUV',
    capacity: '6-7 Passengers',
    description: 'Luxury SUV with captain seats and premium interiors.',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/222736/innova-crysta-2026-exterior-right-front-three-quarter-8.jpeg',
  },
  {
    name: 'Chevrolet Tavera',
    type: 'muv',
    typeLabel: 'MUV',
    capacity: '9 Passengers',
    description: 'Spacious vehicle suitable for larger groups.',
    image: 'https://stimg.cardekho.com/images/car-images/large/Chevrolet/Chevrolet-Tavera/Sandrift-Grey.jpg',
  },
];

/* ─── Card ──────────────────────────────────────────────────────────────────── */

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const theme = THEME[vehicle.type];
  const Icon = ICON_MAP[vehicle.type];

  return (
    <div
      className={`bg-white border-2 ${theme.card} rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}
    >
      {/* Visual — photo or icon */}
      {vehicle.image ? (
        <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '16/9' }}>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className={`${theme.iconWrap} ${theme.iconColor} p-5`} style={{ aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon />
        </div>
      )}

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <h3 className="text-base font-bold text-gray-900 leading-tight">{vehicle.name}</h3>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${theme.badge} ml-auto flex-shrink-0`}>
            {vehicle.typeLabel}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-3">
          <Users className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{vehicle.capacity}</span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{vehicle.description}</p>

        <a
          href={`https://wa.me/918218042225?text=Hi,%20I%20want%20to%20book%20a%20${encodeURIComponent(vehicle.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

/* ─── Section ───────────────────────────────────────────────────────────────── */

const Fleet = ({ showAll = false }: { showAll?: boolean }) => {
  const displayedVehicles = showAll ? vehicles : vehicles.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Our Fleet</h2>
        <p className="section-subheading">
          Choose from our well-maintained fleet of vehicles for a comfortable journey
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <Link to="/fleet" className="btn-outline">
              View Full Fleet
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Fleet;
