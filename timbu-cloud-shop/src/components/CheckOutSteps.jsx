import React from 'react';

const CheckoutSteps = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center text-2xl font-bold mb-4">Checkout</h2>
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <div className="rounded-full bg-darkBlue text-white p-2">Shipping</div>
          <div className="border-t-2 border-gray-300 flex-grow mx-2"></div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full bg-lightBlue text-white p-2">Payment details</div>
          <div className="border-t-2 border-gray-300 flex-grow mx-2"></div>
          </div>
        <div className="flex items-center">
          <div className="rounded-full bg-lightBlue text-white p-2">Confirmation</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
