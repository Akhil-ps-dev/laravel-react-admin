import React from 'react'
import Footer from '../layouts/admin/Footer'
import Navbar from '../layouts/admin/Navbar'
import Sidebar from '../layouts/admin/Sidebar'


export default function Profile() {
  return (
    <div className='sb-nav-fixed'>
    <Navbar/>

    <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
           <Sidebar/>
        </div>
        <div id='layoutSidenav_content'>
            <main>
           <h1>profile </h1>

            </main>
            <Footer/>

        </div>
    </div>
</div>
  )
}
