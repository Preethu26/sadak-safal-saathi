import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Truck, Target, Heart, Star } from "lucide-react";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const problemPoints = [
    "Finding reliable suppliers with consistent quality",
    "Getting competitive prices for small quantities",
    "Ensuring timely delivery for daily operations",
    "Building trust without face-to-face relationships",
    "Managing cash flow with supplier payments",
    "Dealing with seasonal price fluctuations"
  ];

  const solutionFeatures = [
    {
      icon: Shield,
      title: "Verified Supplier Network",
      description: "Every supplier undergoes strict verification for quality, reliability, and business credentials"
    },
    {
      icon: Users,
      title: "Community-Driven Trust",
      description: "Real reviews and ratings from fellow vendors help you make informed decisions"
    },
    {
      icon: Truck,
      title: "Flexible Delivery Options",
      description: "Small quantity orders with reliable delivery schedules that fit your business needs"
    },
    {
      icon: Target,
      title: "Direct Supplier Connection",
      description: "Cut out middlemen and connect directly with wholesalers for better pricing"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      business: "Sharma's Chat Corner",
      location: "Bandra, Mumbai",
      rating: 5,
      text: "Since using Sadak Safal Saathi, I save 20% on raw materials and get fresh vegetables delivered every morning. The suppliers are trustworthy!"
    },
    {
      name: "Priya Patel",
      business: "Patel's Dosa Center",
      location: "Andheri, Mumbai",
      rating: 5,
      text: "The platform helped me find oil suppliers who deliver small quantities. No more large investments in bulk purchases!"
    },
    {
      name: "Mohammed Ali",
      business: "Ali's Biryani Stall",
      location: "Mohammed Ali Road, Mumbai",
      rating: 5,
      text: "Quality spices at wholesale prices with home delivery. My customers can taste the difference in quality!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Empowering India's
            </span>
            <br />
            Street Food Ecosystem
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're solving the real challenges faced by street food vendors in sourcing 
            quality raw materials from trusted suppliers at competitive prices.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">The Challenge We're Solving</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Street food vendors in India face significant challenges in raw material sourcing that affect their business profitability and growth.
            </p>
          </div>
          
          <Card className="p-8 bg-gradient-to-r from-orange-50 to-red-50">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Key Pain Points:</h3>
                <ul className="space-y-3">
                  {problemPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3">Impact on Business:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Higher procurement costs</span>
                    <span className="font-semibold text-destructive">+25-40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time spent on sourcing</span>
                    <span className="font-semibold text-destructive">3-4 hrs/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality inconsistency</span>
                    <span className="font-semibold text-destructive">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cash flow issues</span>
                    <span className="font-semibold text-destructive">Frequent</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Our Solution */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive B2B marketplace that connects street food vendors with verified suppliers, 
              ensuring trust, quality, and competitive pricing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutionFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Impact</h2>
            <p className="text-white/90">Real results for real businesses</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-white/80">Active Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-white/80">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">25%</div>
              <div className="text-white/80">Average Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">10,000+</div>
              <div className="text-white/80">Successful Orders</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">What Our Vendors Say</h2>
            <p className="text-lg text-muted-foreground">
              Real stories from street food entrepreneurs who transformed their business with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To democratize access to quality raw materials for street food vendors across India, 
                    enabling them to build sustainable and profitable businesses while serving delicious, 
                    affordable food to millions.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the backbone of India's street food ecosystem, where every vendor has access 
                    to trusted suppliers, competitive pricing, and the tools they need to grow their business 
                    and serve their community.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of vendors and suppliers who are already growing their business with Sadak Safal Saathi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="vendor"
              onClick={() => navigate("/vendor-portal")}
            >
              Join as Vendor
            </Button>
            <Button 
              size="lg" 
              variant="supplier"
              onClick={() => navigate("/supplier-portal")}
            >
              Join as Supplier
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;