import React from 'react'

const Footer = () => {
  return (
    <>
 {/* Footer Start */}
<footer className="bg-dark text-white pt-4 pb-2 mt-5">
  <div className="container text-center text-md-start">
    <div className="row">
      <div className="col-md-4 mb-3">
        <h5 className="text-uppercase">MyWebsite</h5>
        <p>We provide high quality web solutions to make your business grow online.</p>
      </div>
      <div className="col-md-4 mb-3">
        <h5 className="text-uppercase">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#" className="text-white text-decoration-none">About</a></li>
          <li><a href="#" className="text-white text-decoration-none">Services</a></li>
          <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-4 mb-3">
        <h5 className="text-uppercase">Contact</h5>
        <p>Email: info@mywebsite.com</p>
        <p>Phone: +880 1234 567890</p>
      </div>
    </div>
    <hr className="bg-light" />
    <div className="text-center">
      <p className="mb-0">© 2025 MyWebsite | All Rights Reserved.</p>
    </div>
  </div>
</footer>
{/* Footer End */}


    </>
  )
}

export default Footer
