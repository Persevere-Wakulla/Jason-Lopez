import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react'
import BackButton from './BackButton'


export default function SignUp() {
  const [goBack, setGoBack] = useState(false);
  // const navigate = useNavigate()
  const myCall = async (e) => {
    e.preventDefault()
    const newUser = {
      name: validationServer01.value,
      password: inputPassword3.value,
      email: validationServer6.value,
      city: validationServer03.value,
      state: validationServer04.value,
      zip: validationServer05.value,
      tribe: validationServer02.value
    }
    await fetch('http://localhost:5555/login', {
      method: 'POST',
      body: JSON.stringify(newUser),
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return (

    <div id='sign-up'>
      <form className="row g-3 p-5 form-container" onSubmit={myCall}>
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label fs-4">Hebrew name</label>
          <input type="text" className="form-control is-valid" id="validationServer01" required />
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServer02" className="form-label fs-4">Tribe name</label>
          <input type="text" className="form-control is-valid" id="validationServer02" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServer6" className="form-label fs-4">Email</label>
          <input type="email" className="form-control is-valid" id="validationServer6" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServerUsername" className="form-label fs-4">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationServer03" className="form-label fs-4">City</label>
          <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServer04" className="form-label fs-4">State</label>
          <input type="text" className="form-control is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServer05" className="form-label fs-4">Zip</label>
          <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input is-invalid" type="checkbox" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
            <label className="form-check-label" htmlFor="invalidCheck3">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12 d-flex justify">
          <button className="btn btn-primary" type="submit">Submit form</button>
        <BackButton />
        </div>
      </form>
      <iframe title="earth" id="background" src="./earth.html" />
        
    </div>

  )
}