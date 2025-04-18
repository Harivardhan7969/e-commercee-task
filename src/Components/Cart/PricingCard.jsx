import { Divider } from '@mui/material'


const PricingCard = ({ cartCount }) => {

  const totalPrice = cartCount.reduce((total, item) => total + item.price, 0);


  return (
    <>
      <div className='space-y-3 p-3 '>
        <div className='flex justify-between items-center'>
          <span>Subtotal</span>
          <span>₹1399</span>
        </div>
        <div className='flex justify-between items-center'>
          <span>Discount</span>
          <span>₹999</span>
        </div>
        <div className='flex justify-between items-center'>
          <span>Shipping</span>
          <span>₹99</span>
        </div>
        <div className='flex justify-between items-center'>
          <span>Platform</span>
          <span className='text-primary-color'>free</span>
        </div>


      </div>
      <Divider />
      <div className='flex justify-between items-center p-5 font-semibold text-lg'>
        <span>Total</span>
        <span className='text-primary-color'>₹{totalPrice}</span>
      </div>
    </>

  )
}

export default PricingCard