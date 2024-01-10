import mainLogo from '../assets/image/ShopG_image.png'

export default function Navbar () {
  return (
    <div className='flex flex-row justify-evenly '>
      <button className='w-12 h-12 '><img src={mainLogo}/></button>
      <span class="space-y-2">
        <div class="w-8 h-0.5 bg-gray-800 "></div>
        <div class="w-8 h-0.5 bg-gray-800 "></div>
        <div class="w-8 h-0.5 bg-gray-800 "></div>
        <div className='text-xs font-bold'>Menu</div>
      </span>
      <div>
        <input type="text" placeholder=' Search for drinks' className='border-2 border-black rounded ' />
      </div>
      <div>Account</div>
      <div>Cart</div>
    </div>
  )
}

