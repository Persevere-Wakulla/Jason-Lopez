import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import SignUp from './SignUp';

export default function LoginPage({ setter }) {

  // state to control if we're logging in or signing up
  const [signUp, setSignUp] = useState(false)

  const navigate = useNavigate()
  const myCall = async (e) => {
    e.preventDefault()
    const user = {
      email: inputEmail3.value,
      password: inputPassword3.value
    }
    const res = await fetch('http://localhost:5555/', {
      method: 'POST',
      body: JSON.stringify(user),
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log(data);
    if (data) {
      sessionStorage.setItem('user', JSON.stringify(data))
      setter(true)
    }
    }

  return (
    <>
      {signUp ? <SignUp back={setSignUp} />
        : (
          <>
            <main id='heading'>
            <iframe title="earth" id="background" src="./earth.html" />
              <h1 className="glow ">HebreW Nazyry Assembly!</h1>
            </main>

            <div className="m-5">
              <div className="float-start">
                <img className="img-menorah" src="/Menorah-1.png" />
              </div>
              <div className="float-end">
                <img className="img-menorah" src="/Menorah-1.png" />
              </div>
            </div>

            <form className="form-login" onSubmit={myCall}>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Remember Me
                    </label>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-evenly">
                <div>
                  <button type="submit" className="btn btn-primary">login</button>
                </div>
                <div>
                  <p onClick={() => setSignUp(true)} className="underline hover  link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">SignUp</p>
                </div>
              </div>
            </form>
              <div className='scrip-container'>
               <h6 className='glow-scrip'>
                <b>MATTITHYAHU 5:16 - 19</b> 
              </h6>
              <p>
                <b> 16.</b> “LET YOUR LIGHT SO SHINE BEFORE MEN, SO THAT THEY
                SEE YOUR GOOD WORKS AND PRAISE YOUR FATHER WHO IS IN
                THE SHAMAYIM.
                <b> 17.</b> “DO NOT THINK THAT I CAME TO DESTROY THE TURAH OR
                THE NEBY'YM. I DID NOT COME TO DESTROY BUT TO COMPLETE.
                <b>18.</b> “FOR TRULY, I SAY TO YOU, TILL THE SHAMAYM AND THE
                EARTH PASS AWAY, ONE YOD OR ONE TITTLE, SHALL BY NO
                MEANS PASS FROM THE TURAH TILL ALL BE DONE.
                <b> 19.</b> “WHOEVER, THEN, BREAKS ONE OF THE LEAST OF THESE
                COMMANDS, AND TEACHES MAN SO, SHALL BE CALLED LEAST IN THE REIGN
                OF THE SHAMAYM; BUT WHOEVER DOES AND TEACHES THEM, HE SHALL BE CALLED
                GREAT IN THE REIGN OF THE SHAMAYM.
            </p>
        </div>
          </>
        )}
    </>
  )
}
