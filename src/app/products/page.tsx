import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Argan Oil Products | Premium Cosmetic & Culinary Oil",
  description: "Browse our complete collection of authentic argan oil products from Agadir Ait Melloul. Cosmetic, culinary, and gift sets available.",
};

export default function Products() {
  const products = [
    {
      title: "Premium Cosmetic Argan Oil - 50ml",
      description: "Pure, cold-pressed argan oil perfect for face, body, and hair care. Rich in vitamin E, antioxidants, and essential fatty acids.",
      price: "450 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/84fb4b69-e7cc-47d6-8a4d-255774ed3733.png",
      features: [
        "100% Pure & Organic",
        "Cold-pressed extraction",
        "Rich in Vitamin E & antioxidants",
        "Anti-aging & moisturizing",
        "Premium amber glass bottle",
        "Suitable for all skin types"
      ]
    },
    {
      title: "Premium Cosmetic Argan Oil - 100ml",
      description: "Larger size of our premium cosmetic argan oil. Perfect for daily skincare routine and hair treatments.",
      price: "750 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a89fb3f1-d4d6-4c5a-998a-c2ea6ec5c710.png",
      features: [
        "100% Pure & Organic",
        "Economy size for daily use",
        "Cold-pressed extraction",
        "Anti-aging properties",
        "Premium packaging",
        "Best value for money"
      ]
    },
    {
      title: "Culinary Argan Oil - 250ml",
      description: "Traditional roasted argan oil with rich, nutty flavor. Perfect for Amlou, salads, and Moroccan dishes.",
      price: "380 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d03b3d5-f2bb-4213-b9c3-56b77a368695.png",
      features: [
        "Traditional roasted flavor",
        "Culinary grade quality",
        "Rich in omega fatty acids",
        "Perfect for Amlou preparation",
        "Dark protective bottle",
        "Authentic Moroccan taste"
      ]
    },
    {
      title: "Culinary Argan Oil - 500ml",
      description: "Family size culinary argan oil for restaurants and large households. Same premium quality in larger quantity.",
      price: "650 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1259f7a7-3863-4950-ba38-828223a2ba93.png",
      features: [
        "Family/restaurant size",
        "Traditional roasted process",
        "Bulk pricing advantage",
        "Professional culinary use",
        "Extended shelf life",
        "Perfect for cooking schools"
      ]
    },
    {
      title: "Argan Oil Beauty Set",
      description: "Complete beauty set with 50ml cosmetic oil, organic argan soap, and bamboo massage roller.",
      price: "650 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7b85fb5-ac18-4539-b05c-238cd40cca18.png",
      features: [
        "50ml premium cosmetic oil",
        "Organic argan soap bar",
        "Bamboo massage roller",
        "Beautiful gift packaging",
        "Complete skincare routine",
        "Perfect for gifts"
      ]
    },
    {
      title: "Traditional Gift Set",
      description: "Premium gift set containing both cosmetic and culinary argan oil with traditional Berber packaging.",
      price: "750 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/29829ac7-aa13-4ea2-bbf3-9bcf3b29a5fb.png",
      features: [
        "50ml cosmetic argan oil",
        "250ml culinary argan oil",
        "Traditional wooden box",
        "Berber pattern design",
        "Product information booklet",
        "Premium gift presentation"
      ]
    },
    {
      title: "Corporate Gift Set",
      description: "Elegant corporate gift set with premium packaging, perfect for business gifts and corporate events.",
      price: "950 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7cd96b9d-dccb-4162-b524-c48d0759ea98.png",
      features: [
        "100ml cosmetic oil",
        "250ml culinary oil",
        "Organic soap & cream",
        "Luxury presentation box",
        "Custom branding available",
        "Bulk pricing for orders 10+"
      ]
    },
    {
      title: "Argan Hair Care Set",
      description: "Specialized hair care set with argan oil, argan shampoo, and leave-in treatment for healthy hair.",
      price: "580 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27b9889e-8037-4c50-9654-73b8eda59215.png",
      features: [
        "50ml pure argan hair oil",
        "Organic argan shampoo",
        "Leave-in treatment cream",
        "Hair care guide included",
        "Suitable for all hair types",
        "Natural ingredients only"
      ]
    },
    {
      title: "Organic Argan Soap",
      description: "Handmade organic soap enriched with argan oil. Natural cleansing with moisturizing properties.",
      price: "85 MAD",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6545a586-09b6-4c97-8d98-b94f04437c19.png",
      features: [
        "Handmade organic soap",
        "Enriched with argan oil",
        "Natural moisturizing",
        "Chemical-free formula",
        "Eco-friendly packaging",
        "Available in 3 scents"
      ]
    }
  ];

  const categories = [
    { name: "All Products", count: products.length },
    { name: "Cosmetic Oils", count: 3 },
    { name: "Culinary Oils", count: 2 },
    { name: "Gift Sets", count: 3 },
    { name: "Other Products", count: 1 }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Premium Products
          </h1>
          <p className="text-xl text-amber-100 leading-relaxed">
            Discover our complete collection of authentic argan oil products, 
            each crafted with care in Agadir Ait Melloul
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-white border border-amber-200 text-amber-800 hover:bg-amber-100 transition-colors duration-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
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
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Quality Guarantee
            </h2>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto">
              Every product comes with our commitment to authenticity and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">100% Authentic</h3>
              <p className="text-amber-600">Pure argan oil from our trees in Agadir Ait Melloul</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Lab Tested</h3>
              <p className="text-amber-600">Every batch tested for purity and quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Fast Shipping</h3>
              <p className="text-amber-600">Secure packaging and worldwide delivery</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">30-Day Return</h3>
              <p className="text-amber-600">Not satisfied? Full refund within 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">
            Looking for Bulk Orders?
          </h2>
          <p className="text-lg text-amber-600 mb-8">
            We offer special pricing for wholesalers, retailers, spas, and large quantity orders. 
            Contact us for custom packaging and private labeling options.
          </p>
          <div className="bg-amber-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Bulk Order Benefits:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2">
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-2">•</span>
                  Volume discounts starting at 50 units
                </li>
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-2">•</span>
                  Custom packaging and labeling
                </li>
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-2">•</span>
                  Dedicated account manager
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-2">•</span>
                  Flexible payment terms
                </li>
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-2">•</span>
                  Priority shipping and delivery
                </li>
                <li className="flex items-center text-amber-700">
                  <span className="text-amber-500 mr-2">•</span>
                  Technical support and training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}