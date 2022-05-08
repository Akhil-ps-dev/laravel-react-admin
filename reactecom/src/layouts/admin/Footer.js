import React from 'react'
import {Link} from 'react-router-dom'


export default function Footer() {
  return (
    <footer class="py-4 bg-light mt-auto">
    <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; Your Website 2022</div>
            <div>
                <Link to="#">Privacy Policy</Link>
                &middot;
                <Link to="#">Terms &amp; Conditions</Link>
            </div>
        </div>
    </div>
</footer>
  )
}
