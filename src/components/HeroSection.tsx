import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Truck, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";
import vendorIcon from "@/assets/vendor-icon.jpg";
import supplierIcon from "@/assets/supplier-icon.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-orange-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Connect. Trust. Grow.
                  </span>
                  <br />
                  <span className="text-foreground">
                    Your Street Food Success Partner
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Bridge the gap between street food vendors and trusted suppliers. 
                  Get quality raw materials at competitive prices with guaranteed delivery.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate("/vendor-portal")}
                  className="text-lg px-8 py-6"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  I'm a Vendor
                </Button>
                <Button 
                  variant="supplier" 
                  size="lg"
                  onClick={() => navigate("/supplier-portal")}
                  className="text-lg px-8 py-6"
                >
                  <Truck className="mr-2 h-5 w-5" />
                  I'm a Supplier
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Verified Vendors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">200+</div>
                  <div className="text-sm text-muted-foreground">Trusted Suppliers</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Street food marketplace" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-xl">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Sadak Safal Saathi?</h2>
            <p className="text-xl text-muted-foreground">
              Solving real problems for the street food ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Suppliers</h3>
              <p className="text-muted-foreground">
                Every supplier is verified for quality and reliability
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Quantities</h3>
              <p className="text-muted-foreground">
                Order exactly what you need, no minimum quantity hassles
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-info to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Delivery</h3>
              <p className="text-muted-foreground">
                On-time delivery with real-time tracking
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-warning to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Trust</h3>
              <p className="text-muted-foreground">
                Rating system and community reviews for transparency
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of vendors and suppliers already growing their business with us
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 hover:shadow-xl transition-all transform hover:-translate-y-1">
                <img src={vendorIcon} alt="Vendor" className="w-20 h-20 mx-auto mb-4 rounded-full" />
                <h3 className="text-2xl font-bold mb-4">For Vendors</h3>
                <p className="text-muted-foreground mb-6">
                  Find trusted suppliers, compare prices, and get quality ingredients delivered to your doorstep
                </p>
                <Button 
                  variant="vendor" 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate("/vendor-portal")}
                >
                  Start as Vendor
                </Button>
              </Card>
              
              <Card className="p-8 hover:shadow-xl transition-all transform hover:-translate-y-1">
                <img src={supplierIcon} alt="Supplier" className="w-20 h-20 mx-auto mb-4 rounded-full" />
                <h3 className="text-2xl font-bold mb-4">For Suppliers</h3>
                <p className="text-muted-foreground mb-6">
                  Reach more customers, showcase your products, and grow your wholesale business
                </p>
                <Button 
                  variant="supplier" 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate("/supplier-portal")}
                >
                  Start as Supplier
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;