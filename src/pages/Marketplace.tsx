import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Star, MapPin, Clock, Filter, Users, Package } from "lucide-react";
import Header from "@/components/Header";

const categories = [
  { name: "Vegetables", count: 45, icon: "🥬" },
  { name: "Spices", count: 32, icon: "🌶️" },
  { name: "Oil & Ghee", count: 18, icon: "🛢️" },
  { name: "Rice & Grains", count: 25, icon: "🌾" },
  { name: "Dairy", count: 12, icon: "🥛" },
  { name: "Herbs", count: 20, icon: "🌿" }
];

const suppliers = [
  {
    id: 1,
    name: "Mumbai Fresh Supplies",
    location: "Vashi, Navi Mumbai",
    rating: 4.5,
    reviews: 127,
    products: 35,
    speciality: "Fresh Vegetables",
    verified: true,
    deliveryTime: "2-4 hours"
  },
  {
    id: 2,
    name: "Green Valley Traders",
    location: "Andheri, Mumbai",
    rating: 4.3,
    reviews: 89,
    products: 28,
    speciality: "Organic Produce",
    verified: true,
    deliveryTime: "3-5 hours"
  },
  {
    id: 3,
    name: "Quality Oil Merchants",
    location: "Dadar, Mumbai",
    rating: 4.7,
    reviews: 156,
    products: 15,
    speciality: "Oils & Ghee",
    verified: true,
    deliveryTime: "1-2 hours"
  },
  {
    id: 4,
    name: "Spice Masters Co.",
    location: "Crawford Market, Mumbai",
    rating: 4.8,
    reviews: 203,
    products: 42,
    speciality: "Spices & Masalas",
    verified: true,
    deliveryTime: "1-3 hours"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Premium Onions",
    supplier: "Mumbai Fresh Supplies",
    price: 25,
    unit: "kg",
    originalPrice: 30,
    rating: 4.5,
    image: "🧅",
    discount: 17
  },
  {
    id: 2,
    name: "Garam Masala",
    supplier: "Spice Masters Co.",
    price: 200,
    unit: "kg",
    originalPrice: 250,
    rating: 4.8,
    image: "🌶️",
    discount: 20
  },
  {
    id: 3,
    name: "Pure Mustard Oil",
    supplier: "Quality Oil Merchants",
    price: 120,
    unit: "liter",
    originalPrice: 135,
    rating: 4.7,
    image: "🛢️",
    discount: 11
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
          <p className="text-muted-foreground">
            Discover trusted suppliers and quality products for your street food business
          </p>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            <TabsTrigger value="deals">Today's Deals</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            {/* Search and Categories */}
            <Card className="p-6">
              <div className="flex gap-4 items-center mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category) => (
                  <Card 
                    key={category.name}
                    className={`p-4 cursor-pointer hover:shadow-md transition-all ${
                      selectedCategory === category.name ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.name ? '' : category.name
                    )}
                  >
                    <div className="text-center space-y-2">
                      <div className="text-2xl">{category.icon}</div>
                      <h3 className="font-medium text-sm">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{category.count} products</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Product Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{product.image}</div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.supplier}</p>
                      </div>
                      {product.discount && (
                        <Badge className="absolute top-0 right-0 bg-destructive text-destructive-foreground">
                          -{product.discount}%
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-primary">
                            ₹{product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">per {product.unit}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>

                    <Button className="w-full">View Details</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="suppliers" className="space-y-6">
            <Card className="p-6">
              <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search suppliers by name or location..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {suppliers.map((supplier) => (
                <Card key={supplier.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold">{supplier.name}</h3>
                          {supplier.verified && (
                            <Badge variant="default" className="bg-success text-success-foreground">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{supplier.speciality}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{supplier.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Delivery: {supplier.deliveryTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{supplier.rating}</span>
                          <span className="text-sm text-muted-foreground">({supplier.reviews})</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{supplier.products} products</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{supplier.reviews} reviews</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">View Products</Button>
                      <Button variant="outline">Contact</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deals" className="space-y-6">
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">🔥 Today's Hot Deals</h2>
                <p className="text-muted-foreground">
                  Limited time offers from our verified suppliers
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow border-2 border-primary/20">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{product.image}</div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.supplier}</p>
                      </div>
                      <Badge className="absolute top-0 right-0 bg-destructive text-destructive-foreground">
                        -{product.discount}% OFF
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          ₹{product.price}
                        </div>
                        <div className="text-lg text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </div>
                        <div className="text-sm text-muted-foreground">per {product.unit}</div>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>

                    <Button className="w-full" variant="default">
                      Grab Deal Now
                    </Button>
                    
                    <p className="text-center text-xs text-muted-foreground">
                      ⏰ Limited time offer
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Marketplace;