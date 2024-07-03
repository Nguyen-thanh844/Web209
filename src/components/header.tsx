import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <div className='header'>
        <div className='head-container'>
          <div className='logo'>
            <a href='#'>
              <img src='/assets/images/logo.png' alt='' />
            </a>
          </div>
          <ul className='menu'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Shop</a>
            </li>
            <li>
              <a href='#'>Category</a>
            </li>
            <li>
              <a href='#'>FAQ</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
          <div className='icon'>
            <img src='/assets/images/bt_search.png' alt='' />
            <img src='/assets/images/bt_cart.png' alt='' />
            <img src='/assets/images/bt_whislist.png' alt='' />
            <img src='/assets/images/bt_account.png' alt='' />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Header