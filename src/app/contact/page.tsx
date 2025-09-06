import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Argan Oil from Agadir Ait Melloul",
  description: "Get in touch with us for premium argan oil orders, wholesale inquiries, or questions. Located in Agadir Ait Melloul, Morocco.",
};

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-amber-100 leading-relaxed">
            Get in touch for orders, questions, or to learn more about our premium argan oil
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                {/* Business Info */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">
                    Argan Gold - Agadir Ait Melloul
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-3 text-xl">📍</span>
                      <div>
                        <p className="font-medium">Address</p>
                        <p>Route Nationale, Agadir Ait Melloul</p>
                        <p>Souss-Massa Region, Morocco</p>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-3 text-xl">📞</span>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p>+212 528 XXX XXX</p>
                        <p>+212 6XX XXX XXX (WhatsApp)</p>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-3 text-xl">✉️</span>
                      <div>
                        <p className="font-medium">Email</p>
                        <p>info@argangold.ma</p>
                        <p>orders@argangold.ma</p>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-3 text-xl">🕒</span>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">
                    Our Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-2">✓</span>
                      Premium argan oil sales (cosmetic & culinary)
                    </li>
                    <li className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-2">✓</span>
                      Wholesale and bulk orders
                    </li>
                    <li className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-2">✓</span>
                      Custom packaging and private labeling
                    </li>
                    <li className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-2">✓</span>
                      International shipping and export
                    </li>
                    <li className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-2">✓</span>
                      Factory tours and educational visits
                    </li>
                    <li className="flex items-center text-amber-700">
                      <span className="text-amber-500 mr-2">✓</span>
                      Product consultation and support
                    </li>
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">
                    Quick Contact Options
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+212528XXXXXX" 
                      className="flex items-center text-amber-700 hover:text-amber-800 transition-colors duration-200"
                    >
                      <span className="text-amber-500 mr-3">📞</span>
                      Call Us Now
                    </a>
                    <a 
                      href="https://wa.me/2126XXXXXXXX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-amber-700 hover:text-amber-800 transition-colors duration-200"
                    >
                      <span className="text-amber-500 mr-3">💬</span>
                      WhatsApp Chat
                    </a>
                    <a 
                      href="mailto:info@argangold.ma" 
                      className="flex items-center text-amber-700 hover:text-amber-800 transition-colors duration-200"
                    >
                      <span className="text-amber-500 mr-3">✉️</span>
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Visit Our Facilities
              </h2>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Located in the heart of Morocco&apos;s argan region, our facilities in 
                Agadir Ait Melloul are open for visits. See firsthand how we produce 
                the finest argan oil using traditional methods combined with modern 
                quality standards.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">🏭</span>
                  <span>Modern production facilities</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">🌳</span>
                  <span>Surrounded by native argan trees</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">👨‍🏫</span>
                  <span>Guided tours available</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">🎓</span>
                  <span>Educational programs for groups</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">🛍️</span>
                  <span>On-site shop and tasting</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  Schedule a Visit
                </h3>
                <p className="text-amber-600 mb-4">
                  Advance booking required for facility tours and group visits. 
                  Contact us at least 48 hours in advance.
                </p>
                <div className="text-amber-700">
                  <p><strong>Tour Duration:</strong> 1-2 hours</p>
                  <p><strong>Group Size:</strong> 2-20 people</p>
                  <p><strong>Languages:</strong> Arabic, French, English</p>
                  <p><strong>Cost:</strong> Free for customers and partners</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-amber-200 rounded-lg p-4 text-center">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e70482a-83a6-447f-aad1-0bfeb8f6a416.png"
                  alt="Interactive map of Agadir Ait Melloul showing argan oil facility location"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <p className="mt-4 text-amber-800 text-sm">
                  📍 Click map for directions to our facility in Agadir Ait Melloul
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">
                Q: How do I place a bulk order?
              </h3>
              <p className="text-amber-700">
                Contact us directly via phone or email with your requirements. We offer 
                special pricing for orders over 50 units and can provide custom packaging 
                and labeling options.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">
                Q: Do you ship internationally?
              </h3>
              <p className="text-amber-700">
                Yes, we ship worldwide. Shipping costs and delivery times vary by 
                destination. We ensure secure packaging to maintain product quality 
                during transport.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">
                Q: Can I visit your facilities?
              </h3>
              <p className="text-amber-700">
                Absolutely! We welcome visitors to see our production process. 
                Please contact us at least 48 hours in advance to schedule your visit. 
                Tours are available in Arabic, French, and English.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">
                Q: What certificates do you have?
              </h3>
              <p className="text-amber-700">
                Our products are certified organic, HACCP compliant, and meet 
                international quality standards. We can provide certificates 
                upon request for wholesale customers.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">
                Q: How long does shipping take?
              </h3>
              <p className="text-amber-700">
                Domestic shipping within Morocco: 2-3 business days. International 
                shipping: 5-15 business days depending on destination and shipping method. 
                Express options are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Argan Oil?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Contact us today to place your order or learn more about our products and services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+212528XXXXXX"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-800 bg-white hover:bg-amber-50 transition-colors duration-200"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/2126XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-amber-800 transition-colors duration-200"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}