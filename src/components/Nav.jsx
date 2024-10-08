import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = ({navList}) => {
  const location = useLocation();
  return (
    <ul className='navbar-nav align-items-center mb-2 mb-lg-0 w-50 justify-content-around'>
        {
            navList.map((item, index)=>(
                <li className='nav-item px-3' key={index}>
                    <Link className={`nav-link px-3 ${location.pathname === `/${item.link}` ? 'active':''}`} to={item.link}>{item.title}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default Nav