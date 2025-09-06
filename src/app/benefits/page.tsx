import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Argan Oil Benefits | Health & Beauty Properties",
  description: "Discover the amazing benefits of pure Moroccan argan oil for skin, hair, and health. Learn about scientific research and traditional uses.",
};

export default function Benefits() {
  const skinBenefits = [
    {
      title: "Deep Moisturizing",
      description: "Rich in oleic, linoleic, and palmitic acids that penetrate deeply to nourish and hydrate skin.",
      icon: "💧"
    },
    {
      title: "Anti-Aging Properties",
      description: "High in vitamin E and antioxidants that help reduce fine lines and protect against free radicals.",
      icon: "✨"
    },
    {
      title: "Acne Treatment",
      description: "Non-comedogenic oil that helps regulate sebum production and reduce acne inflammation.",
      icon: "🎯"
    },
    {
      title: "Wound Healing",
      description: "Contains compounds that promote faster healing of cuts, scars, and skin irritations.",
      icon: "🩹"
    }
  ];

  const hairBenefits = [
    {
      title: "Hair Strengthening",
      description: "Proteins and nutrients strengthen hair follicles and reduce breakage and split ends.",
      icon: "💪"
    },
    {
      title: "Scalp Health",
      description: "Moisturizes scalp, reduces dandruff, and creates optimal conditions for hair growth.",
      icon: "🌱"
    },
    {
      title: "Shine Enhancement",
      description: "Natural oils add lustrous shine and softness without weighing hair down.",
      icon: "✨"
    },
    {
      title: "Heat Protection",
      description: "Forms protective barrier against heat styling tools and environmental damage.",
      icon: "🛡️"
    }
  ];

  const healthBenefits = [
    {
      title: "Heart Health",
      description: "Rich in unsaturated fatty acids that may help maintain healthy cholesterol levels.",
      icon: "❤️"
    },
    {
      title: "Antioxidant Power",
      description: "High levels of vitamin E and phenolic compounds fight oxidative stress.",
      icon: "🔋"
    },
    {
      title: "Anti-Inflammatory",
      description: "Natural compounds help reduce inflammation throughout the body.",
      icon: "🌿"
    },
    {
      title: "Digestive Support",
      description: "Traditional use for digestive health and nutrient absorption.",
      icon: "🍃"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benefits of Argan Oil
          </h1>
          <p className="text-xl text-amber-100 leading-relaxed">
            Discover why argan oil has been treasured for centuries as Morocco&apos;s liquid gold
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Nature&apos;s Perfect Formula
              </h2>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Argan oil contains a unique combination of nutrients that make it one of the most 
                beneficial oils in the world. Rich in vitamin E, essential fatty acids, and 
                antioxidants, our pure argan oil from Agadir Ait Melloul offers proven benefits 
                for skin, hair, and overall health.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-amber-800">80%</div>
                  <div className="text-amber-600 text-sm">Essential Fatty Acids</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-amber-800">120mg</div>
                  <div className="text-amber-600 text-sm">Vitamin E per 100g</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-amber-800">200+</div>
                  <div className="text-amber-600 text-sm">Active Compounds</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-amber-800">100%</div>
                  <div className="text-amber-600 text-sm">Natural & Pure</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6955f77-78c7-47bb-9d6f-080d0248a3a0.png"
                alt="Microscopic view of argan oil molecular structure showing nutrients"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skin Benefits */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Skin Benefits
            </h2>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto">
              Transform your skin with the nourishing power of pure argan oil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skinBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
                <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-amber-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6 text-center">
              How to Use for Skin Care
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌅</span>
                </div>
                <h4 className="font-semibold text-amber-800 mb-2">Morning Routine</h4>
                <p className="text-amber-600 text-sm">Apply 2-3 drops to clean face and neck before sunscreen</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌙</span>
                </div>
                <h4 className="font-semibold text-amber-800 mb-2">Night Treatment</h4>
                <p className="text-amber-600 text-sm">Massage gently into skin for overnight repair and hydration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💆</span>
                </div>
                <h4 className="font-semibold text-amber-800 mb-2">Body Care</h4>
                <p className="text-amber-600 text-sm">Use on dry areas like elbows, knees, and heels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Hair Benefits
            </h2>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto">
              Restore your hair&apos;s natural beauty and strength
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {hairBenefits.map((benefit, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-amber-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6 text-center">
              Hair Treatment Methods
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-4">🛁 Pre-Shampoo Treatment</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>• Apply to dry hair 30 minutes before washing</li>
                  <li>• Focus on ends and damaged areas</li>
                  <li>• Massage into scalp for circulation</li>
                  <li>• Shampoo gently to remove excess oil</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-4">💆 Leave-In Treatment</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>• Apply 1-2 drops to damp hair ends</li>
                  <li>• Avoid roots to prevent greasiness</li>
                  <li>• Style as usual - no need to rinse</li>
                  <li>• Perfect for daily protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Health & Wellness Benefits
            </h2>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto">
              Supporting your overall health with nature&apos;s powerful nutrients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {healthBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
                <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-amber-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6 text-center">
              Culinary Uses & Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2d574f97-64aa-4d96-9c4e-22fd6a9ef8f7.png"
                  alt="Traditional Moroccan Amlou with argan oil almonds and honey"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Traditional Amlou</h4>
                <p className="text-amber-600">
                  The classic Moroccan spread made with roasted argan oil, almonds, and honey. 
                  Rich in healthy fats and antioxidants.
                </p>
              </div>
              <div>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/04a0e0b1-08cc-41a6-ae09-28d7d82f3154.png"
                  alt="Modern cuisine salad drizzled with argan oil dressing"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Modern Cuisine</h4>
                <p className="text-amber-600">
                  Perfect finishing oil for salads, grilled vegetables, and fish. 
                  Adds unique nutty flavor and nutritional benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Research */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">
            Backed by Science
          </h2>
          <p className="text-lg text-amber-600 mb-8">
            Multiple scientific studies confirm the remarkable benefits of argan oil
          </p>
          
          <div className="bg-amber-50 p-8 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-amber-800 mb-2">50+</div>
                <div className="text-amber-600">Published Studies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-800 mb-2">95%</div>
                <div className="text-amber-600">User Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-800 mb-2">30 Days</div>
                <div className="text-amber-600">Visible Results</div>
              </div>
            </div>
          </div>

          <blockquote className="text-lg italic text-amber-700 mb-8">
            &quot;Research shows that argan oil&apos;s unique composition of tocopherols, 
            polyphenols, and essential fatty acids provides exceptional benefits for 
            skin health and anti-aging properties.&quot;
          </blockquote>
          
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link href="/products">Try Our Premium Argan Oil</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience These Benefits Yourself
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of satisfied customers who have discovered the power of authentic argan oil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-amber-50">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800">
              <Link href="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}