import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    from: '',
    to: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi RideMate Cab Service Mathura,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
From: ${formData.from}
To: ${formData.to}
Date: ${formData.date}

Message: ${formData.message}`;

    window.open(`https://wa.me/918218042225?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Contact Us</h2>
        <p className="section-subheading">
          Get in touch for bookings, inquiries, or any assistance
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <a href="tel:+918218042225" className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors block">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-primary-600 font-medium">8218042225</p>
                <p className="text-sm text-gray-500 mt-1">Click to call</p>
              </a>

              <a href="https://wa.me/918218042225" target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors block">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-green-600 font-medium">8218042225</p>
                <p className="text-sm text-gray-500 mt-1">Instant Response</p>
              </a>

              <a href="mailto:ridematecabservice@gmail.com" className="bg-gray-50 rounded-xl p-6 hover:bg-accent-50 transition-colors block">
                <div className="bg-accent-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-accent-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-accent-500 font-medium break-all">ridematecabservice@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">Click to email</p>
              </a>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                <p className="text-gray-700 font-medium">24/7 All Days</p>
                <p className="text-sm text-gray-500 mt-1">Always Available</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Our Location</h3>
                  <p className="text-gray-600 text-sm">
                    Sri Shakuntla Dham Apartment, Near Chirayu Hospital, Narholi Chowk, Mathura, Uttar Pradesh
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden h-48">
                <iframe
                  src="https://maps.google.com/maps?q=Narholi+Chowk,+Mathura,+Uttar+Pradesh,+India&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RideMate Cab Service Mathura Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Ride</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="Enter email address"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
                    From
                  </label>
                  <select
                    id="from"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  >
                    <option value="">Select Pickup</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Agra">Agra</option>
                    <option value="Mathura">Mathura</option>
                    <option value="Vrindavan">Vrindavan</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Delhi Airport">Delhi Airport</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                    To
                  </label>
                  <select
                    id="to"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  >
                    <option value="">Select Destination</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Agra">Agra</option>
                    <option value="Mathura">Mathura</option>
                    <option value="Vrindavan">Vrindavan</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Delhi Airport">Delhi Airport</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                  placeholder="Any special requirements or vehicle preference..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="h-5 w-5" />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
