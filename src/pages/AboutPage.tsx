import { useEffect } from 'react';
import { Users, Award, MapPin, Car, Target, Eye, Heart } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - RideMate Cab Service Mathura';
  }, []);

  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About RideMate Cab Service Mathura</h1>
          <p className="text-primary-100 text-lg max-w-3xl mx-auto">
            Your trusted taxi service in Mathura — committed to safe, comfortable and affordable cab services across North India
          </p>
          <p className="text-white font-medium mt-4">
            Safe Rides • Trusted Service • Affordable Fares
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Based in Mathura</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Sri Shakuntla Dham Apartment, Near Chirayu Hospital, Narholi Chowk, Mathura, Uttar Pradesh
              </p>
              <div className="rounded-xl overflow-hidden h-48 mt-4">
                <iframe
                  src="https://maps.google.com/maps?q=Narholi+Chowk,+Mathura,+Uttar+Pradesh,+India&output=embed&z=14"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RideMate Cab Service Mathura Location"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                RideMate Cab Service Mathura was founded with a simple mission: to make travel from Mathura easy, safe and affordable. Based at Narholi Chowk, Mathura, we provide reliable taxi service for local city rides, temple tours to Vrindavan, outstation trips to Delhi and Agra, and long-distance travel to Jaipur.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our founders, with deep roots in Mathura and years of experience in transportation, understood the needs of pilgrims, tourists and daily commuters. We built RideMate to solve the problem of unreliable cabs, hidden charges and uncomfortable vehicles in Mathura.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, RideMate Cab Service Mathura is proud to have served thousands of happy customers — from local Mathura residents and Vrindavan temple visitors to tourists exploring the Golden Triangle. Our commitment to quality service remains as strong as ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide the most reliable, safe and affordable cab service in Mathura — making every journey memorable and stress-free.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become the most trusted cab service in Mathura and North India, known for exceptional service and fair pricing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trust, transparency, and customer satisfaction are at the heart of everything we do. We treat every passenger like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Our Numbers Speak</h2>
          <p className="section-subheading">A track record you can trust</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center">
              <Users className="h-10 w-10 text-primary-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary-600 mb-1">5K+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 text-center">
              <MapPin className="h-10 w-10 text-accent-500 mx-auto mb-3" />
              <div className="text-4xl font-bold text-accent-500 mb-1">5</div>
              <div className="text-gray-600 text-sm">Cities Covered</div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center">
              <Car className="h-10 w-10 text-primary-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary-600 mb-1">20+</div>
              <div className="text-gray-600 text-sm">Vehicles</div>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 text-center">
              <Award className="h-10 w-10 text-accent-500 mx-auto mb-3" />
              <div className="text-4xl font-bold text-accent-500 mb-1">5+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Where We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { city: 'Mathura', desc: "Krishna's Birthplace", primary: true },
                { city: 'Vrindavan', desc: 'City of Temples', primary: false },
                { city: 'Agra', desc: 'Taj Mahal City', primary: true },
                { city: 'Delhi', desc: "India's Capital", primary: false },
                { city: 'Jaipur', desc: 'The Pink City', primary: true },
              ].map(({ city, desc, primary }) => (
                <div key={city} className="text-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 ${primary ? 'bg-primary-100' : 'bg-accent-100'}`}>
                    <MapPin className={`h-7 w-7 ${primary ? 'text-primary-600' : 'text-accent-500'}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{city}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
