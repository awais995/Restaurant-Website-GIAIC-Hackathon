// components/Checkout.jsx
import Image from 'next/image';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white p-6 lg:p-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Section: Shipping and Billing Address */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="border p-2 rounded-lg w-full"
            />
            <select className="border p-2 rounded-lg w-full">
              <option>Country</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="border p-2 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Address 1"
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="border p-2 rounded-lg w-full"
            />
          </form>

          <div className="mt-6">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Same as shipping address</span>
            </label>
          </div>

          <div className="mt-6 flex justify-between">
            <button className="bg-gray-200 px-4 py-2 rounded-lg">
              &larr; Back to cart
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Proceed to shipping &rarr;
            </button>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {/* Product List */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b pb-2"
              >
                <Image
                  src="/shopimages/chicken-tikka.png"
                  alt="Chicken Tikka Kabab"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-medium">Chicken Tikka Kabab</h3>
                  <p className="text-sm text-gray-500">150 gm net</p>
                </div>
                <p className="font-medium">$5</p>
              </div>
            ))}

            {/* Summary Details */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Sub-total</span>
                <span>$15</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$1.50</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$16.50</span>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full">
                Proceed to shipping &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}