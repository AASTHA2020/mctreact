import React from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {

  // Using the useSelector hook to access the orders from the Redux store
  // If there are no orders, initialize orders to an empty array
    const orders = useSelector((state) => state.amazon.orders) || [];

  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="container mx-auto h-auto">
        <h2 className="text-3xl font-medium mb-6">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="text-lg">You have no orders yet🫥</p>
        ) : (
           // Mapping over the orders array to display each order
          orders.map((order, index) => (
            order && (   //Ensure the order exists before rendering 
              <div key={index} className="w-full bg-white p-4 mb-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Order #{index + 1}</h3>
                {order.date && (
                      // Displaying the order date, if it exists            
                  <p className="text-sm text-gray-600 mb-2">Date: {new Date(order.date).toLocaleString()}</p>
                )}
                <p className="text-lg font-medium mb-2">Total: ${order.totalPrice}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {order.products && order.products.map((item, i) => (
                    <div key={i} className="border border-gray-300 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <img src={item.image} alt={item.title} className="w-full h-auto mb-2 rounded-lg" />
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-lg font-semibold">Unit Price: ${item.price}</p>
                      <p className="text-lg font-semibold">Quantity: {item.quantity}</p>
                      <p className="text-lg font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
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
