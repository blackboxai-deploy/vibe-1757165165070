import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      title: "Premium Cosmetic Argan Oil",
      description: "Pure, cold-pressed argan oil perfect for skin and hair care. Rich in vitamin E and essential fatty acids.",
      price: "450 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67589b13-b77f-4602-a846-cd84a9236b0b.png",
      features: [
        "100% Pure & Organic",
        "Cold-pressed extraction",
        "Rich in Vitamin E",
        "Anti-aging properties",
        "50ml glass bottle"
      ]
    },
    {
      title: "Culinary Argan Oil",
      description: "Roasted argan oil with a rich, nutty flavor. Perfect for traditional Moroccan dishes and modern cuisine.",
      price: "380 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4c4a4a2-8e03-4281-8e4a-f19c055459c4.png",
      features: [
        "Traditional roasted flavor",
        "Culinary grade",
        "Rich in omega fatty acids",
        "Perfect for Amlou",
        "250ml dark bottle"
      ]
    },
    {
      title: "Argan Oil Gift Set",
      description: "Beautiful gift set containing both cosmetic and culinary argan oil with traditional packaging.",
      price: "750 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fbdfb706-0815-48ea-8992-3010d21458e6.png",
      features: [
        "Cosmetic & Culinary oils",
        "Traditional Berber packaging",
        "Perfect for gifts",
        "Includes product guide",
        "Premium presentation box"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">
                Authentic Argan Oil from Agadir Ait Melloul
              </h2>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                For generations, our family has been producing the finest argan oil 
                in the heart of Morocco&apos;s argan forest. Located in Agadir Ait Melloul, 
                we maintain traditional extraction methods passed down through Berber 
                communities while ensuring the highest quality standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">✓</span>
                  Hand-harvested from century-old argan trees
                </li>
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">✓</span>
                  Traditional cold-pressing methods
                </li>
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">✓</span>
                  Certified organic and sustainable
                </li>
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-3">✓</span>
                  Supporting local Berber communities
                </li>
              </ul>
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/464582b8-a04d-4fe5-a454-95dfa0fa67e4.png"
                alt="Traditional Moroccan women extracting argan oil using traditional stone tools"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-amber-100">
                <p className="text-amber-800 font-semibold">🏆 Premium Quality</p>
                <p className="text-amber-600 text-sm">Since 1950</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Our Featured Products
            </h2>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto">
              Discover our premium collection of authentic argan oil products, 
              each carefully crafted using traditional methods and the finest argan nuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                features={product.features}
                href="/contact"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Why Choose Our Argan Oil?
            </h2>
            <p className="text-lg text-amber-600">
              Experience the difference of authentic, traditionally-made Moroccan argan oil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">100% Natural</h3>
              <p className="text-amber-600">No chemicals, no additives, just pure argan oil from nature</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏺</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Traditional Methods</h3>
              <p className="text-amber-600">Hand-pressed using centuries-old Berber techniques</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Sustainably Sourced</h3>
              <p className="text-amber-600">Supporting local communities and forest conservation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Premium Quality</h3>
              <p className="text-amber-600">Rigorous quality control ensures excellence in every bottle</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Pure Argan Oil?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Contact us today to place your order or learn more about our premium argan oil products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-amber-50">
              <Link href="/contact">Get Your Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800">
              <Link href="/benefits">Learn About Benefits</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}