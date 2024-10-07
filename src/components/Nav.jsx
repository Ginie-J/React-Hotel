import React from 'react'

const Nav = ({navList}) => {
  return (
    <ul className='navbar-nav align-items-center mb-2 mb-lg-0 w-50 justify-content-around'>
        {
            navList.map((item, index)=>(
                <li className='nav-item px-3' key={index}>
                    <a className={`nav-link px-3 ${index===0 ? 'active':''}`} href={item.link}>{item.title}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default Nav