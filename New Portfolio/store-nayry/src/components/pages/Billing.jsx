import { useNavigate } from "react-router-dom"

export default function Billing() {

    const navigate = useNavigate()

    function checkingOut(e) {
        e.preventDefault()
        navigate('/shoppingcart/checkout')
    }

    return (
        <div className="row">
            <div className="col-75">
                <div className="container">
                    <form action="" onSubmit={checkingOut}>

                        <div className="row">
                            <div className="col-50">
                                <h3>Billing Address</h3>
                                <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Full Name" />
                                <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="Email Address" />
                                <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="adr" name="address" placeholder="Address" />
                                <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder="City" />

                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="ST." />
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="Zip Code" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-50">
                                <h3>Payment</h3>
                                <label htmlFor="fname">Accepted Cards</label>
                                <div className="icon-container">
                                    <img src="src/assets/Card icons/1933702_charge_credit card_debit_payment_visa_icon.png" />
                                    <img src="src/assets/Card icons/1933704_american express_amex_charge_credit card_payment_icon.png" />
                                    <img src="src/assets/Card icons/2908223_bank_card_credit_debit_mastercard_icon.png" />
                                    <img src="src/assets/Card icons/2908230_card_commercial_cover_credit_shopify_icon.png" />
                                    <img src="src/assets/Card icons/2908234_commercial_cover_credit_w_icon.png" />

                                </div>
                                <label htmlFor="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname" placeholder="Name On Card" />
                                <label htmlFor="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="Credit Card#" />
                                <label htmlFor="expmonth">Exp Month</label>
                                <input type="text" id="expmonth" name="expmonth" placeholder="Exp Month" />

                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="expyear">Exp Year</label>
                                        <input type="text" id="expyear" name="expyear" placeholder="Experation Date" />
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="cvv" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <label>
                            <input type="checkbox" name="sameadr" /> Shipping address same as billing
                        </label>
                        <input type="submit" value="Continue to checkout" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    )
}