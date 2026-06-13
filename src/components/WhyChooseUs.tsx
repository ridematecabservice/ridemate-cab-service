import { Shield, Sparkles, IndianRupee, Headphones, CheckCircle, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Experienced Drivers',
    description: 'Our drivers have 5+ years of experience with deep knowledge of Mathura, Vrindavan & North India routes.',
  },
  {
    icon: Sparkles,
    title: 'Clean Vehicles',
    description: 'All vehicles are regularly sanitized and maintained for your comfort and safety.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Best rates in Mathura with no hidden charges or surge pricing — ever.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round the clock customer support for any assistance during your journey.',
  },
  {
    icon: CheckCircle,
    title: 'Safe Travel',
    description: 'GPS tracked vehicles with live location sharing for your complete peace of mind.',
  },
  {
    icon: Clock,
    title: 'On-Time Pickup',
    description: 'We pride ourselves on punctuality — your driver will always be there right on time.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Why Choose RideMate Cab Service Mathura?
        </h2>
        <p className="text-primary-100 text-center max-w-2xl mx-auto mb-12">
          We are committed to providing the best travel experience with safety, comfort, and affordability
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 flex gap-4"
            >
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">5K+</div>
            <div className="text-primary-100 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">500+</div>
            <div className="text-primary-100 text-sm">Successful Trips</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">20+</div>
            <div className="text-primary-100 text-sm">Vehicles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">5+</div>
            <div className="text-primary-100 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
