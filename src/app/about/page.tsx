import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Authentic Argan Oil from Agadir Ait Melloul",
  description: "Learn about our family's tradition of producing premium argan oil in Agadir Ait Melloul, Morocco. Discover our story, values, and commitment to quality.",
};

export default function About() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-amber-100 leading-relaxed">
            Three generations of authentic argan oil production in the heart of Morocco&apos;s argan forest
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Founded in 1950 by our grandfather, Hassan Alami, our family business 
                has been at the heart of argan oil production in Agadir Ait Melloul for over 
                seven decades. What started as a small cooperative has grown into a 
                respected name in authentic Moroccan argan oil.
              </p>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Located in the Souss region, our facilities are surrounded by the native 
                argan trees that have grown in this unique ecosystem for millions of years. 
                We work directly with local Berber women&apos;s cooperatives, ensuring fair 
                trade practices and preserving traditional extraction methods.
              </p>
              <p className="text-lg text-amber-700 leading-relaxed">
                Today, under the leadership of the third generation, we continue to honor 
                our heritage while meeting international quality standards, bringing the 
                finest Moroccan argan oil to customers worldwide.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e828ceb-5e16-44c2-8cec-db4ec41707ce.png"
                alt="Historic family photo of three generations with argan trees in background"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Traditional Production Process
            </h2>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto">
              We maintain the authentic methods passed down through generations while 
              ensuring the highest quality and hygiene standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">1</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Harvesting</h3>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cdffc51a-bde6-4e75-97d8-fe7a9b3e5a0b.png"
                alt="Berber women harvesting argan fruits from tall trees"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-amber-600">Hand-picking ripe argan fruits from our ancient trees during harvest season</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">2</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Extracting</h3>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3144a940-9cb8-4a76-9747-bd8223f1030e.png"
                alt="Traditional stone tools for cracking argan nuts by hand"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-amber-600">Carefully cracking nuts with traditional stone tools to extract the kernels</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">3</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Pressing</h3>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/30f22f96-2653-4f15-ac78-953e9228fccb.png"
                alt="Traditional stone mill grinding argan kernels into paste"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-amber-600">Cold-pressing kernels using traditional stone mills to preserve nutrients</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">4</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Filtering</h3>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cdee3eb4-1faf-4615-8c63-6844eb2508d8.png"
                alt="Pure golden argan oil being filtered and bottled"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-amber-600">Pure oil is carefully filtered and bottled in premium glass containers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Our Values & Commitment
            </h2>
            <p className="text-lg text-amber-600">
              What drives us in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Fair Trade</h3>
              <p className="text-amber-700">
                We work directly with women&apos;s cooperatives, ensuring fair wages and 
                supporting local communities in Agadir Ait Melloul region.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Sustainability</h3>
              <p className="text-amber-700">
                Our practices protect the argan forest ecosystem and ensure these 
                precious trees continue to thrive for future generations.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Quality</h3>
              <p className="text-amber-700">
                Every bottle meets strict quality standards, from harvest to packaging, 
                ensuring you receive only the finest argan oil.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏺</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Tradition</h3>
              <p className="text-amber-700">
                We preserve ancient Berber techniques while incorporating modern 
                hygiene and quality control standards.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Authenticity</h3>
              <p className="text-amber-700">
                100% pure argan oil with full traceability from our trees in 
                Agadir Ait Melloul to your doorstep.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Global Reach</h3>
              <p className="text-amber-700">
                Bringing authentic Moroccan argan oil to customers worldwide 
                while maintaining our local roots and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Visit Us in Agadir Ait Melloul
              </h2>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Our facilities are located in the heart of Morocco&apos;s argan region, 
                in Agadir Ait Melloul. This strategic location allows us to work 
                directly with the source of the world&apos;s finest argan trees.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">📍</span>
                  <span>Agadir Ait Melloul, Souss-Massa Region, Morocco</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">🌲</span>
                  <span>Surrounded by UNESCO Biosphere Reserve</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">🏭</span>
                  <span>Modern facilities with traditional methods</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">👥</span>
                  <span>Supporting 50+ local families</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Visit Our Facilities</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d1abdfd-958e-41e9-8e8c-f170ae818cef.png"
                alt="Aerial view of Agadir Ait Melloul with argan forest and Atlas mountains"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border border-amber-100">
                <p className="text-amber-800 font-semibold">🌍 UNESCO Protected</p>
                <p className="text-amber-600 text-sm">Biosphere Reserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Our Premium Argan Oil
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Discover the quality and authenticity that comes from three generations of expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-amber-50">
              <Link href="/products">View Our Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}