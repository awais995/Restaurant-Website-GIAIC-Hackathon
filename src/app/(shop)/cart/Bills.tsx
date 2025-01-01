export default function Bill() {
    return (
      <div className="min-h-screen bg-white flex mt-0 items-center justify-center p-4">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Coupon Code */}
          <div className="p-6 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
            <p className="text-sm text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Here code"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">
                Apply
              </button>
            </div>
          </div>
  
          {/* Right Section: Total Bill */}
          <div className="p-6 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Cart Subtotal</span>
                <span className="text-sm font-medium">$120.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Shipping Charge</span>
                <span className="text-sm font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Amount</span>
                <span className="text-sm font-medium">$205.00</span>
              </div>
            </div>
            <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }