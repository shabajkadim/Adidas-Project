import React from 'react'
import '../../Style-page/navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className='navbody'>
        <div className='nav1'>
            <p className='nav-p-1'>FREE DELIVERY, RETURN & EXCHANGE <p className='arrow-icon' ><i class="fa-solid fa-angle-down"></i></p> </p>
            {/* <p className='nav-p-2'>UPI & NET BANKING AVAILABLE</p> */}
            {/* <p className='nav-p-3'>SIGN UP & GET 15% OFF</p> */}
        </div>



        <div className='nav2'> 
        {/* <div className='nav-left-icon' >
          <p className='list-icon'><i class="fa-solid fa-bars"></i></p>
          <p className='heart-icon'><i class="fa-regular fa-heart"></i></p>
        </div> */}
        <div className='nav-center-logo'>
          <p className='adi-logo'>
            <img className='w-h100' src="https://cdn.iconscout.com/icon/free/png-256/free-adidas-14-761730.png" alt="Adidas logo" />
          </p>
          <p className='category'>
            <p className='bold'>MEN</p>
            <p className='bold'>WOMEN</p>
            <p className='bold'> KIDS</p>
            <p className='normal'>SPORTS</p>
            <p className='normal'>BRANDS</p>
            <p className='normal'>LIFESTYLE</p>
            <p className='bold-clr'>OUTLET</p>
          </p>
        </div>

        <div className='nav-right-info'>
          <div className='login-reg'>
            <p>Help</p>
            <p>Order & return</p>
            <p>Sign up </p>
            <p>Login in</p>
          </div>

          <div className='search-profile-icon'>
            <p className='search' > <input type='text' id='seach-input' placeholder='search' /> <p><i class="fa-solid fa-magnifying-glass">
              </i></p> </p>
            <p className='profile'><i class="fa-regular fa-user"></i></p>
            <p className='heart'><i class="fa-regular fa-heart"></i></p>
            <p className='bag'><i class="fa-solid fa-bag-shopping"></i></p>
          </div>
        </div>
        </div>


        <div className='nav-3'>
          ADIDAS: THE BRAND WITH THE 3-STRIPES
        </div>
      </div>
    </div>
  )
}

export default Navbar
