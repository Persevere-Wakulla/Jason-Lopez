



// window.addEventListener('DOMContentLoaded', () => {
//     let scrollPos = 0;
//     const mainNav = document.getElementById('mainNav');
//     const headerHeight = mainNav.clientHeight;
//     window.addEventListener('scroll', function() {
//         const currentTop = document.body.getBoundingClientRect().top * -1;
//         if ( currentTop < scrollPos) {
//             // Scrolling Up
//             if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
//                 mainNav.classList.add('is-visible');
//             } else {
//                 console.log(123);
//                 mainNav.classList.remove('is-visible', 'is-fixed');
//             }
//         } else {
//             // Scrolling Down
//             mainNav.classList.remove(['is-visible']);
//             if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
//                 mainNav.classList.add('is-fixed');
//             }
//         }
//         scrollPos = currentTop;
//     });
// })
export default function Contact() {
    return (
            <main className="mb-4  opacity contact-container col-9">
                <h1 className="glow-2">Contact info</h1>
                <div className="opacity px-4 px-lg-5 ">
                    <div className="row gx-4 gx-lg- w-50 justify-content-center">
                        <div className="col-md-10 col-lg--8 col-xl-7">
                            <p>
                                "Want to get in touch? Fill out the form below to send us a message and we will get back to you as soon as possible!"
                            </p>
                            <div className="my-5">
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <div className="form-floating">
                                        <input className="form-control " id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">
                                            A name is required.
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required" />
                                        <label htmlFor="name">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">
                                            A email is required.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">Email is not valid.
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
                                        <label htmlFor="name">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">
                                            A phone number is required.
                                        </div>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">Email is not valid.
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: + "12rem" }} data-sb-validations="required"></textarea>
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">
                                            A message is required.
                                        </div>
                                    </div>
                                    <br />
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!
                                            </div>
                                            "To active this form signup on Loginpage"
                                            <br />
                                            <a href="./LoginPage.jsx">LoginPage</a>
                                            <div className="d-none" id="submitErrorMessage">
                                                <div className="text-center text-danger mb-3"> Error sending message!</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* submit button */}
                                    <button className="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            <h1></h1>
            </main>
      
    )
}


