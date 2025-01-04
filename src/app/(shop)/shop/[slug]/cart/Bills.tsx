"use client";
import { useState } from "react";

export default function Bill({ subtotal }: { subtotal: number }) {
  const [shippingCharge, setShippingCharge] = useState(10); // Default shipping charge
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0); // Discount percentage or fixed value
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const totalAmount = subtotal + shippingCharge - discount;

  const handleApplyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10); // Apply a fixed $10 discount
      setAppliedCoupon(true);
    } else if (couponCode === "FREESHIP") {
      setShippingCharge(0); // Waive shipping charge
      setAppliedCoupon(true);
    } else {
      alert("Invalid coupon code. Please try again.");
      setAppliedCoupon(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex mt-0 items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coupon Code Section */}
        <div className="p-6 border border-gray-300 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
          <p className="text-sm text-gray-500 mb-4">
            Apply a coupon code to get discounts.
          </p>
          <div className="flex items-center">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600"
              disabled={appliedCoupon}
            >
              {appliedCoupon ? "Applied" : "Apply"}
            </button>
          </div>
          {appliedCoupon && (
            <p className="text-sm text-green-500 mt-2">Coupon applied successfully!</p>
          )}
        </div>

        {/* Total Bill Section */}
        <div className="p-6 border border-gray-300 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Cart Subtotal</span>
              <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Shipping Charge</span>
              <span className="text-sm font-medium">${shippingCharge.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Discount</span>
                <span className="text-sm font-medium">-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Amount</span>
              <span className="text-sm font-medium">${totalAmount.toFixed(2)}</span>
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
