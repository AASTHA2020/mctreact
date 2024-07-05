import React from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {
  const orders = useSelector((state) => state.amazon.orders) || [];

  return (
    <div className="w-full bg-gray-100 p-8 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="text-xl text-center text-gray-600">You have no orders yet 🫥</p>
        ) : (
          orders.map((order, index) => (
            order && (
              <div key={index} className="w-full bg-white p-6 mb-8 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Order #{index + 1}</h3>
                  {order.date && (
                    <p className="text-sm text-gray-500">Date: {new Date(order.date).toLocaleString()}</p>
                  )}
                </div>
                <p className="text-lg font-medium text-gray-700 mb-4">Total: ${order.totalPrice}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {order.products && order.products.map((item, i) => (
                    <div key={i} className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-md font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-2 rounded-lg" />
                      <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                      <p className="text-md font-medium text-gray-800">Unit Price: ${item.price}</p>
                      <p className="text-md font-medium text-gray-800">Quantity: {item.quantity}</p>
                      <p className="text-md font-medium text-gray-800">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
