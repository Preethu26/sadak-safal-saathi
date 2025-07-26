import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ShoppingCart, Star, MapPin, Clock, Truck } from "lucide-react";
import Header from "@/components/Header";

// Mock data for demonstration
const products = [
  {
    id: 1,
    name: "Premium Onions",
    supplier: "Mumbai Fresh Supplies",
    price: 25,
    unit: "kg",
    rating: 4.5,
    location: "Vashi, Navi Mumbai",
    delivery: "2-4 hours",
    inStock: true,
    minOrder: 5,
    image: "🧅"
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    supplier: "Green Valley Traders",
    price: 30,
    unit: "kg",
    rating: 4.3,
    location: "Andheri, Mumbai",
    delivery: "3-5 hours",
    inStock: true,
    minOrder: 3,
    image: "🍅"
  },
  {
    id: 3,
    name: "Pure Vegetable Oil",
    supplier: "Quality Oil Merchants",
    price: 120,
    unit: "liter",
    rating: 4.7,
    location: "Dadar, Mumbai",
    delivery: "1-2 hours",
    inStock: true,
    minOrder: 2,
    image: "🛢️"
  },
  {
    id: 4,
    name: "Basmati Rice",
    supplier: "Rice King Distributors",
    price: 80,
    unit: "kg",
    rating: 4.6,
    location: "Kurla, Mumbai",
    delivery: "4-6 hours",
    inStock: true,
    minOrder: 10,
    image: "🌾"
  },
  {
    id: 5,
    name: "Fresh Coriander",
    supplier: "Herb Garden Supplies",
    price: 15,
    unit: "bunch",
    rating: 4.2,
    location: "Bandra, Mumbai",
    delivery: "2-3 hours",
    inStock: false,
    minOrder: 5,
    image: "🌿"
  },
  {
    id: 6,
    name: "Garam Masala",
    supplier: "Spice Masters Co.",
    price: 200,
    unit: "kg",
    rating: 4.8,
    location: "Crawford Market, Mumbai",
    delivery: "1-3 hours",
    inStock: true,
    minOrder: 1,
    image: "🌶️"
  }
];

const orders = [
  {
    id: "ORD001",
    supplier: "Mumbai Fresh Supplies",
    items: 3,
    total: 450,
    status: "Delivered",
    date: "2024-01-15",
    rating: 5
  },
  {
    id: "ORD002",
    supplier: "Green Valley Traders",
    items: 2,
    total: 180,
    status: "In Transit",
    date: "2024-01-16",
    rating: null
  },
  {
    id: "ORD003",
    supplier: "Quality Oil Merchants",
    items: 1,
    total: 240,
    status: "Processing",
    date: "2024-01-16",
    rating: null
  }
];

const VendorPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: any, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-success text-success-foreground";
      case "In Transit": return "bg-info text-info-foreground";
      case "Processing": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Vendor Portal</h1>
          <p className="text-muted-foreground">
            Find quality ingredients from trusted suppliers near you
          </p>
        </div>

        <Tabs defaultValue="marketplace" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="cart">Cart ({cart.length})</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="marketplace" className="space-y-6">
            {/* Search and Filters */}
            <Card className="p-6">
              <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products or suppliers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Sort</Button>
              </div>
            </Card>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{product.image}</div>
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.supplier}</p>
                        </div>
                      </div>
                      {!product.inStock && (
                        <Badge variant="destructive">Out of Stock</Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          ₹{product.price}
                        </span>
                        <span className="text-muted-foreground">per {product.unit}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{product.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Delivery: {product.delivery}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        Min order: {product.minOrder} {product.unit}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="flex-1"
                        disabled={!product.inStock}
                        onClick={() => addToCart(product, product.minOrder)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline">Contact</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order History</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.supplier}</p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>{order.items} items • ₹{order.total}</span>
                      <span>{order.date}</span>
                    </div>
                    {order.rating && (
                      <div className="flex items-center gap-1">
                        {[...Array(order.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="cart" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{item.image}</div>
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.supplier}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{item.price * item.quantity}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} {item.unit}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-xl font-bold text-primary">
                        ₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
                      </span>
                    </div>
                    <Button className="w-full" size="lg">
                      <Truck className="h-4 w-4 mr-2" />
                      Place Order
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Vendor Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Business Name</label>
                  <Input defaultValue="Sharma's Street Food Corner" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contact Number</label>
                  <Input defaultValue="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <Input defaultValue="Linking Road, Bandra West, Mumbai" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Food Type</label>
                  <Input defaultValue="North Indian, Chat, Beverages" />
                </div>
                <Button>Update Profile</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorPortal;