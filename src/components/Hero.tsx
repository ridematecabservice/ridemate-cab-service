import { Phone, MessageCircle, Shield, Clock, ThumbsUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Trusted Taxi Service in Mathura
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Reliable Cab Service in{' '}
              <span className="text-primary-600">Mathura</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-xl mx-auto lg:mx-0">
              Safe, comfortable and affordable taxi service across Mathura, Vrindavan, Agra, Delhi and Jaipur.
            </p>

            <p className="text-sm text-gray-500 mb-6 max-w-xl mx-auto lg:mx-0">
              Local taxi in Mathura • Outstation travel • Airport transfers • Temple tour packages
            </p>

            <p className="text-base md:text-lg text-primary-600 font-medium mb-8 max-w-xl mx-auto lg:mx-0">
              Safe Rides • Trusted Service • Affordable Fares
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://wa.me/918218042225?text=Hi%20RideMate%2C%20I%20would%20like%20to%20book%20a%20taxi%20in%20Mathura"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href="tel:+918218042225"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call: 8218042225
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary-600" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary-600" />
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-primary-600" />
                <span>Best Rates</span>
              </div>
            </div>
          </div>

          {/* Right side – quick-book info card */}
          <div className="relative hidden lg:flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Routes from Mathura</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 bg-primary-50 rounded-lg px-4 py-3">
                  <span className="font-semibold text-primary-700">Mathura → Delhi</span>
                  <span className="ml-auto text-gray-500">~160 km · 3–4 hrs</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3">
                  <span className="font-semibold text-gray-800">Mathura → Vrindavan</span>
                  <span className="ml-auto text-gray-500">~15 km · 30 min</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3">
                  <span className="font-semibold text-gray-800">Mathura → Agra</span>
                  <span className="ml-auto text-gray-500">~60 km · 1.5 hrs</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3">
                  <span className="font-semibold text-gray-800">Mathura → Jaipur</span>
                  <span className="ml-auto text-gray-500">~240 km · 4–5 hrs</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3">
                  <span className="font-semibold text-gray-800">Mathura → Delhi Airport</span>
                  <span className="ml-auto text-gray-500">~180 km · 4–5 hrs</span>
                </div>
              </div>
              <a
                href="https://wa.me/918218042225?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20from%20Mathura"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 rounded-xl text-center block text-sm transition-colors"
              >
                Get Instant Quote on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <ThumbsUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">4.9 / 5 Rating</p>
                  <p className="text-xs text-gray-500">500+ Happy Customers from Mathura &amp; beyond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
