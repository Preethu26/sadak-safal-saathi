import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Package, Truck, BarChart3, Edit, Trash2, Eye } from "lucide-react";
import Header from "@/components/Header";

const myProducts = [
  {
    id: 1,
    name: "Premium Onions",
    price: 25,
    unit: "kg",
    stock: 500,
    orders: 45,
    revenue: 11250,
    status: "Active",
    image: "🧅"
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    price: 30,
    unit: "kg",
    stock: 200,
    orders: 32,
    revenue: 9600,
    status: "Active",
    image: "🍅"
  },
  {
    id: 3,
    name: "Pure Vegetable Oil",
    price: 120,
    unit: "liter",
    stock: 100,
    orders: 28,
    revenue: 33600,
    status: "Active",
    image: "🛢️"
  }
];

const recentOrders = [
  {
    id: "ORD001",
    vendor: "Sharma's Street Food",
    items: "Onions (10kg), Tomatoes (5kg)",
    amount: 400,
    status: "Processing",
    date: "2024-01-16"
  },
  {
    id: "ORD002",
    vendor: "Delhi Chat Corner",
    items: "Vegetable Oil (2L)",
    amount: 240,
    status: "Shipped",
    date: "2024-01-16"
  },
  {
    id: "ORD003",
    vendor: "Mumbai Vada Pav",
    items: "Onions (20kg)",
    amount: 500,
    status: "Delivered",
    date: "2024-01-15"
  }
];

const SupplierPortal = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-success-foreground";
      case "Processing": return "bg-warning text-warning-foreground";
      case "Shipped": return "bg-info text-info-foreground";
      case "Delivered": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Supplier Portal</h1>
          <p className="text-muted-foreground">
            Manage your products and connect with street food vendors
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-primary">₹54,450</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <p className="text-xs text-success mt-1">+12% from last month</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Products</p>
                    <p className="text-2xl font-bold text-secondary">3</p>
                  </div>
                  <Package className="h-8 w-8 text-secondary" />
                </div>
                <p className="text-xs text-info mt-1">All products in stock</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold text-info">105</p>
                  </div>
                  <Truck className="h-8 w-8 text-info" />
                </div>
                <p className="text-xs text-success mt-1">+8 new orders today</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Vendor Partners</p>
                    <p className="text-2xl font-bold text-warning">47</p>
                  </div>
                  <Package className="h-8 w-8 text-warning" />
                </div>
                <p className="text-xs text-success mt-1">+5 new this week</p>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.vendor}</p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{order.items}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">₹{order.amount}</span>
                      <span className="text-sm text-muted-foreground">{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">My Products</h2>
              <Button onClick={() => setShowAddProduct(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            {showAddProduct && (
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Product Name</label>
                    <Input placeholder="e.g., Fresh Potatoes" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Price per Unit</label>
                    <Input type="number" placeholder="25" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Unit</label>
                    <Input placeholder="kg, liter, piece" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Stock Quantity</label>
                    <Input type="number" placeholder="100" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <Textarea placeholder="Product description..." />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button>Add Product</Button>
                  <Button variant="outline" onClick={() => setShowAddProduct(false)}>
                    Cancel
                  </Button>
                </div>
              </Card>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myProducts.map((product) => (
                <Card key={product.id} className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{product.image}</div>
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            ₹{product.price} per {product.unit}
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(product.status)}>
                        {product.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-lg font-bold">{product.stock}</p>
                        <p className="text-xs text-muted-foreground">In Stock</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold">{product.orders}</p>
                        <p className="text-xs text-muted-foreground">Orders</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold">₹{product.revenue}</p>
                        <p className="text-xs text-muted-foreground">Revenue</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Management</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.vendor}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                        <Button variant="outline" size="sm">Update</Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{order.items}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">₹{order.amount}</span>
                      <span className="text-sm text-muted-foreground">{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
                <div className="h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-end justify-center">
                  <p className="text-muted-foreground">Chart Placeholder</p>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Top Products</h3>
                <div className="space-y-3">
                  {myProducts.map((product, index) => (
                    <div key={product.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{product.image}</span>
                        <span className="text-sm">{product.name}</span>
                      </div>
                      <span className="text-sm font-semibold">₹{product.revenue}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Supplier Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Business Name</label>
                  <Input defaultValue="Mumbai Fresh Supplies" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contact Number</label>
                  <Input defaultValue="+91 98765 12345" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Business Address</label>
                  <Textarea defaultValue="Shop No. 45, APMC Market, Vashi, Navi Mumbai - 400703" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Specialization</label>
                  <Input defaultValue="Fresh Vegetables, Spices, Oil" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Delivery Areas</label>
                  <Input defaultValue="Mumbai, Navi Mumbai, Thane" />
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

export default SupplierPortal;