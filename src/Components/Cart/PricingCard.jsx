import { Divider } from '@mui/material';

const PricingCard = ({ cartCount }) => {
  const totalPrice = cartCount.reduce((total, item) => total + item.price, 0);

  return (
    <div className="space-y-4 p-4 sm:p-5 md:p-6 text-sm sm:text-base">
      {/* Price Details */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>₹1399</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>₹999</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>₹99</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Platform</span>
          <span className="text-primary-color">Free</span>
        </div>
      </div>

      <Divider />

      {/* Total */}
      <div className="flex justify-between items-center pt-4 font-semibold text-base sm:text-lg">
        <span>Total</span>
        <span className="text-primary-color">₹{totalPrice}</span>
      </div>
    </div>
  );
};

export default PricingCard;
