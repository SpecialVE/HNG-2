import React from 'react';

const ShippingForm = () => {
  return (
    <div className="container mx-auto p-8 bg-darkBlue text-white rounded-md">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block mb-2">First name</label>
            <input type="text" id="firstName" className="w-full p-2 rounded bg-white text-black" />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2">Last name</label>
            <input type="text" id="lastName" className="w-full p-2 rounded bg-white text-black" />
          </div>
          </div>
        <div className="mb-4">
          <label htmlFor="address1" className="block mb-2">Address 1</label>
          <input type="text" id="address1" className="w-full p-2 rounded bg-white text-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="address2" className="block mb-2">Address 2</label>
          <input type="text" id="address2" className="w-full p-2 rounded bg-white text-black" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="city" className="block mb-2">City</label>
            <input type="text" id="city" className="w-full p-2 rounded bg-white text-black" />
          </div>
          <div>
            <label htmlFor="state" className="block mb-2">State</label>
            <input type="text" id="state" className="w-full p-2 rounded bg-white text-black" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
        <label htmlFor="email" className="block mb-2">Email Address</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-white text-black" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2">Phone number</label>
            <input type="text" id="phone" className="w-full p-2 rounded bg-white text-black" />
          </div>
        </div>
        <button type="submit" className="w-full bg-lightBlue text-white p-2 rounded">NEXT</button>
      </form>
    </div>
  );
};

export default ShippingForm;