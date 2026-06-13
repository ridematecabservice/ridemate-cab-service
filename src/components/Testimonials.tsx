import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajeev Sharma',
    location: 'Mathura',
    rating: 5,
    text: 'Booked RideMate for Mathura to Delhi trip. Driver arrived 10 minutes early, car was spotless. Very comfortable journey on the Yamuna Expressway. Will use again!',
    trip: 'Mathura to Delhi',
  },
  {
    name: 'Pooja Agarwal',
    location: 'Vrindavan',
    rating: 5,
    text: 'Excellent service for Vrindavan temple darshan circuit. The driver knew all the ghats and temples perfectly. Helped us plan our route so we covered everything. 5 stars!',
    trip: 'Vrindavan Temple Tour',
  },
  {
    name: 'Suresh Yadav',
    location: 'Mathura',
    rating: 5,
    text: 'Used RideMate for Mathura to Agra to see the Taj Mahal. Driver was friendly and punctual. Price was very reasonable compared to other services. Highly recommended.',
    trip: 'Mathura to Agra',
  },
  {
    name: 'Kavita Gupta',
    location: 'Mathura',
    rating: 5,
    text: 'Needed airport pickup from Delhi IGI at 3 AM. Driver was there waiting with a board. Car was clean and AC was perfect. Made it to my flight stress-free. Thank you!',
    trip: 'Mathura to Delhi Airport',
  },
  {
    name: 'Anil Mishra',
    location: 'Vrindavan',
    rating: 5,
    text: 'Took RideMate for Jaipur trip with my family of 6. Maruti Ertiga was perfect, comfortable and spacious. Driver was very polite. Will definitely book again for next trip.',
    trip: 'Mathura to Jaipur',
  },
  {
    name: 'Meena Tiwari',
    location: 'Mathura',
    rating: 5,
    text: 'Been using RideMate for 2 years for all my Mathura–Delhi trips. Always on time, clean cabs, fair pricing. Best cab service in Mathura. Don\'t bother looking elsewhere.',
    trip: 'Regular Mathura–Delhi',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="section-subheading">
          Genuine reviews from customers across Mathura, Vrindavan, Agra and Delhi
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary-100" />

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-xs text-primary-600 mt-2">Trip: {testimonial.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
