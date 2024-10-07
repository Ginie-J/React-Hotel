import React from 'react'
import {Container} from 'react-bootstrap';
import Logo from '../res/img/ezhotel_logo.png'
import { HiBars3BottomRight } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import Nav from '../components/Nav';

const Header = () => {
    const navList = [
        {title: "About", link: "link1"},
        {title: "Service", link: "link2"},
        {title: "Blog", link: "link3"},
        {title: "Contact", link: "link4"},
        {title: "Resort", link: "link5"}
    ];
  return (
    <header id="header">
        <nav id='primary-header' className='navbar navbar-expand-lg py-4'>
            <Container fluid className='padding-side'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <a href="index.html" className='navbar-brand'>
                        <img src={Logo} className='logo' alt='hotel logo'/>
                    </a>
                    <button className='navbar-toggler border-0 d-flex d-lg-none order-3 p-2 shadow-none'
                            type='button'
                            data-bs-toggler='offcanvas'
                            data-bs-target='#ezNavbar'
                            aria-controls='ezNavbar'
                            aria-expanded='false'>
                                <HiBars3BottomRight className='f-30'/>
                    </button>
                    <div className='header-bottom offcanvas offcanvas-end'
                         id='exNavbar'
                         aria-labelledby='ezNavbaroffcanvasLabel'>
                        <div className='offcanvas-header px-4 pb-0'>
                            <button className='btn-close btn-close-black mt-2'
                                    type='button'
                                    data-bs-dismiss='offcanvas'
                                    aria-label='close'
                                    data-bs-target='#ezNavbar'>
                            </button>
                        </div>
                        <div className='offcanvas-body align-items-center justify-content-center'>
                            <div className='search d-block d-lg-none m-5'>
                                <form action="" className='position-relative'>
                                    <input type="text" className='form-control bg-se-secondary border-0 rounded-5 px-4 py-2' />
                                    <button type='button' className='position-absolute search-btn top-50 emd-0 translate-middle-y p-1 me-3'>
                                        <GoSearch/>
                                    </button>
                                </form>
                            </div>
                            <Nav navList={navList}/>
                        </div>
                    </div>
                    <div className='search d-lg-block d-none'>
                        <form action="" className='position-relative'>
                            <input type="text" className='form-control bg-secondary border-0 rounded-5 px-4 py-2'
                                    placeholder='Search' />
                            <button type='button' className='position-absolute btn-default top-50 emd-0 search-btn translate-middle-y p-1 me-3'>
                                <GoSearch/>
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </nav>
    </header>
  )
}

export default Header