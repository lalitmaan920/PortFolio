import React from 'react'

export default function Contect() {
  return (
    <form className=' container-fluid col-12 mt-5 pt-5 bg-dark min-vh-100 '>
      <div className=' container-fluid col-6 mt-5 pt-5   border border-info rounded p-3' >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white ">Email address</label>
    <input type="email" className="form-control border border-info bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label text-white">About us</label>
  <textarea class="form-control bg-dark text-white border border-info " id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label text-white">contact Number</label>
    <input type="password" className="form-control border border-info bg-dark text-white " id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-outline-info">Submit</button>
  </div>
</form>
  )
}
