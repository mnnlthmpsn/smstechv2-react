import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/cartContext"

const DeliveryWidget = () => {

    const { getTotal } = useContext(CartContext)

    const [deliveryCost, setDeliveryCost] = useState(0)

    const calcDelivery = flag => {
        const charges = {
            'out_accra_tema': 40,
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
                                    <input type="radio" id="accra" name="shipping" value='accra' className="custom-control-input" onChange={e => calcDelivery(e.target.value)} />
                                    <label className="custom-control-label" htmlFor="accra">Within Accra:</label>
                                </div>
                            </td>
                            <td>GHs 20.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="tema" name="shipping" value='tema' className="custom-control-input" onChange={e => calcDelivery(e.target.value)} />
                                    <label className="custom-control-label" htmlFor="tema">Within Tema:</label>
                                </div>
                            </td>
                            <td>GHs 25.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="out_accra_tema" name="shipping" value='out_accra_tema' className="custom-control-input" onChange={e => calcDelivery(e.target.value)} />
                                    <label className="custom-control-label" htmlFor="out_accra_tema">Outside Accra/Tema:</label>
                                </div>
                            </td>
                            <td>GHs 40.00</td>
                        </tr>

                        <tr className="summary-total">
                            <td>Total:</td>
                            <td>GHs {deliveryCost + getTotal()}</td>
                        </tr>
                    </tbody>
                </table>

                { deliveryCost > 0 && <Link to="/checkout" state={{ deliveryCost }} className="btn btn-outline-primary-2 btn-order btn-block" >PROCEED TO CHECKOUT</Link> }
            </div>

            <Link to="/categories" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></Link>
        </aside>
    )
}

export default DeliveryWidget