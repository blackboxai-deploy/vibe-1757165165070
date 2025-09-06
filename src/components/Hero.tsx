import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5d0368a-c9ca-471f-9ae4-14a3328fd9c3.png"
          alt="Golden argan trees in Moroccan landscape at sunset with traditional berber village"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pure
            <span className="text-amber-400 block">Moroccan Argan Oil</span>
            From Agadir Ait Melloul
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
            Discover the liquid gold of Morocco. Traditionally extracted, 
            authentically pure, and sustainably sourced from the heart of 
            the Atlas Mountains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold"
            >
              <Link href="/products">
                Shop Our Products
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3 text-lg font-semibold"
            >
              <Link href="/about">
                Learn Our Story
              </Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">100% Organic</h3>
            <p className="text-amber-100">Pure, natural, and chemical-free argan oil</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚗️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Traditional Methods</h3>
            <p className="text-amber-100">Hand-pressed using ancient Berber techniques</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
            <p className="text-amber-100">Certified authentic from Agadir Ait Melloul</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;