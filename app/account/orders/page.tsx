import { Package, Truck, CheckCircle2, Clock, ArrowRight, ChevronRight, Link } from "lucide-react";
import { AnimatedSection } from "@/app/_components/animated/AnimatedSection";

// Mock data for orders
const orders = [
  {
    id: "ORD-2024-001",
    date: "2024-03-15",
    status: "Delivered",
    total: 129.99,
    items: 3,
    trackingNumber: "TRK123456789",
    estimatedDelivery: "2024-03-18",
  },
  {
    id: "ORD-2024-002",
    date: "2024-03-14",
    status: "Processing",
    total: 89.99,
    items: 2,
    trackingNumber: "TRK987654321",
    estimatedDelivery: "2024-03-20",
  },
  {
    id: "ORD-2024-003",
    date: "2024-03-13",
    status: "Shipped",
    total: 199.99,
    items: 4,
    trackingNumber: "TRK456789123",
    estimatedDelivery: "2024-03-17",
  },
];

export default async function OrdersPage() {
  // Add a delay to simulate loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Filters</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">
                  <span>All Orders</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">12</span>
                </button>
                <button className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">
                  <span>Processing</span>
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">3</span>
                </button>
                <button className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">
                  <span>Shipped</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">5</span>
                </button>
                <button className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">
                  <span>Delivered</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">4</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Orders</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Spent</span>
                  <span className="font-medium">$1,299.99</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Items Ordered</span>
                  <span className="font-medium">24</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
                  <p className="text-gray-600">Track and manage your orders</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Export
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    New Order
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <Package className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900">Order {order.id}</span>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === "Delivered" 
                                ? "bg-green-100 text-green-700" 
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}>
                              {order.status}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">Placed on {order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                       <a href={`/account/orders/${order.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                          View Details
                        </a>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Package className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Items</span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">{order.items}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Truck className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Tracking</span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">{order.trackingNumber}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Total</span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">${order.total.toFixed(2)}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Delivery</span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">{order.estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
