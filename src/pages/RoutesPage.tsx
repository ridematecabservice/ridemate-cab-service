import { useEffect } from 'react';
import PopularRoutes from '../components/PopularRoutes';

const RoutesPage = () => {
  useEffect(() => {
    document.title = 'Popular Routes - RideMate Cab Service Mathura';
  }, []);

  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Popular Routes</h1>
          <p className="text-white font-medium mb-2">
            Safe Rides • Trusted Service • Affordable Fares
          </p>
          <p className="text-primary-100 text-lg max-w-3xl mx-auto">
            Explore our most travelled routes with experienced drivers
          </p>
        </div>
      </section>

      <PopularRoutes showAll={true} />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Route Information
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Distance Calculation</h3>
                <p className="text-sm text-gray-600">All distances are calculated from city center to city center. Actual distance may vary based on pickup/drop location.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Travel Time</h3>
                <p className="text-sm text-gray-600">Estimated travel time includes normal traffic conditions. Peak hours or bad weather may increase travel time.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get a Quote</h3>
                <p className="text-sm text-gray-600">Contact us on WhatsApp to get the best rates for your specific route and vehicle preference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Route?
          </h2>
          <p className="text-gray-600 mb-8">
            We provide taxi services across North India. Contact us for any custom route and we'll provide the best rates.
          </p>
          <a
            href="https://wa.me/918218042225?text=Hi,%20I%20need%20a%20taxi%20for%20a%20custom%20route"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Custom Quote
          </a>
        </div>
      </section>
    </main>
  );
};

export default RoutesPage;
