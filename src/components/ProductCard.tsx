import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  href?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  price, 
  image, 
  features, 
  href = "/contact" 
}: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-amber-100">
      <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-amber-800">
          {title}
        </CardTitle>
        <CardDescription className="text-amber-600 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* Features */}
        <ul className="space-y-1 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-amber-700 flex items-center">
              <span className="text-amber-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-amber-800">{price}</span>
            <span className="text-sm text-amber-600">per bottle</span>
          </div>
          
          <Button 
            asChild
            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
          >
            <Link href={href}>
              Order Now
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;