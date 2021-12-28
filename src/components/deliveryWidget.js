import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/cartContext"

const DeliveryWidget = () => {

    const { getTotal } = useContext(CartContext)

    const [deliveryCost, setDeliveryCost] = useState(0)

    const calcDelivery = flag => {
        const charges = {
            'pay-on-delivery': 0,
            'accra': 20,
            'tema': 25
        }

        setDeliveryCost(charges[flag])
    }

    return (
        <aside className="col-lg-3">
            <div className="summary summary-cart">
                <h3 className="summary-title">Cart Total</h3>

                <table className="table table-summary">
                    <tbody>
                        <tr className="summary-subtotal">
                            <td>Subtotal:</td>
                            <td>GHs {getTotal()}</td>
                        </tr>
                        <tr className="summary-shipping">
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="free-shipping" name="shipping" value='pay-on-delivery' className="custom-control-input" onChange={e => calcDelivery(e.target.value)} />
                                    <label className="custom-control-label" htmlFor="free-shipping">Pay on Delivery</label>
                                </div>
                            </td>
                            <td></td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="standart-shipping" name="shipping" value='accra' className="custom-control-input" onChange={e => calcDelivery(e.target.value)} />
                                    <label className="custom-control-label" htmlFor="standart-shipping">Within Accra:</label>
                                </div>
                            </td>
                            <td>GHs 20.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="express-shipping" name="shipping" value='tema' className="custom-control-input" onChange={e => calcDelivery(e.target.value)} />
                                    <label className="custom-control-label" htmlFor="express-shipping">Within Tema:</label>
                                </div>
                            </td>
                            <td>GHs 25.00</td>
                        </tr>

                        <tr className="summary-total">
                            <td>Total:</td>
                            <td>GHs {deliveryCost + getTotal()}</td>
                        </tr>
                    </tbody>
                </table>

                <Link to="/checkout" state={{ deliveryCost }} className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</Link>
            </div>

            <Link to="/category" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></Link>
        </aside>
    )
}

export default DeliveryWidget