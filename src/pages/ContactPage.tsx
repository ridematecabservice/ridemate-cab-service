import { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - RideMate Cab Service Mathura';
  }, []);

  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white font-medium mb-2">
            Safe Rides • Trusted Service • Affordable Fares
          </p>
          <p className="text-primary-100 text-lg max-w-3xl mx-auto">
            Get in touch with us for bookings, inquiries, or any assistance - we're available 24/7
          </p>
        </div>
      </section>

      <Contact />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How do I book a taxi?</h3>
                <p className="text-gray-600 text-sm">You can book via WhatsApp, phone call, or the contact form on this page. We respond within minutes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What are your payment options?</h3>
                <p className="text-gray-600 text-sm">We accept cash, UPI, bank transfer, and all major credit/debit cards.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I cancel my booking?</h3>
                <p className="text-gray-600 text-sm">Yes, free cancellation up to 2 hours before pickup. After that, a small fee may apply.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide GST invoices?</h3>
                <p className="text-gray-600 text-sm">Yes, we provide proper GST invoices for all corporate and business bookings.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Are your prices fixed?</h3>
                <p className="text-gray-600 text-sm">Our prices are all-inclusive with no hidden charges. You get the final quote before booking.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if my flight is delayed?</h3>
                <p className="text-gray-600 text-sm">We track your flight and adjust pickup time automatically. No extra charge for flight delays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Book Your Ride?
          </h2>
          <p className="text-primary-100 mb-8">
            Contact us now on WhatsApp or call directly. We're available 24/7 to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918218042225"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              WhatsApp: 8218042225
            </a>
            <a
              href="tel:+918218042225"
              className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Call: 8218042225
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
