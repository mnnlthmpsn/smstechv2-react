import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useLocation } from "react-router-dom"
import { CartContext } from "../contexts/cartContext"

const Checkout = () => {

	const { state } = useLocation()
	const { deliveryCost } = state

	const { cartItems, getTotal, calculate_discount } = useContext(CartContext)
	const { register, handleSubmit, reset } = useForm()

	const onSubmit = async (data) => {
        console.log(data)
    }

	return (
		<main className="main">
			<div className="page-header text-center" style={{ backgroundImage: 'url(assets/images/page-header-bg.jpg)' }}>
				<div className="container">
					<h1 className="page-title">Checkout<span>Shop</span></h1>
				</div>
			</div>
			<nav aria-label="breadcrumb" className="breadcrumb-nav">
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="index.html">Home</a></li>
						<li className="breadcrumb-item"><a href="#">Shop</a></li>
						<li className="breadcrumb-item active" aria-current="page">Checkout</li>
					</ol>
				</div>
			</nav>

			<div className="page-content">
				<div className="checkout">
					<div className="container">
						<form onSubmit={handleSubmit((data) => onSubmit(data))}>
							<div className="row">
								<div className="col-lg-9">
									<h2 className="checkout-title">Billing Details</h2>
									<div className="row">
										<div className="col-sm-6">
											<label>First Name *</label>
											<input type="text" className="form-control" required {...register('firstname')} />
										</div>

										<div className="col-sm-6">
											<label>Last Name *</label>
											<input type="text" className="form-control" required {...register('lastname')} />
										</div>
									</div>

									<div className="row">
										<div className="col-sm-6">
											<label>Email address *</label>
											<input type="email" className="form-control" required />
										</div>

										<div className="col-sm-6">
											<label>GPS Address *</label>
											<input type="text" className="form-control" required {...register('gps_address')} />
										</div>
									</div>

									<div className="row">
										<div className="col-sm-6">
											<label>Postcode / ZIP *</label>
											<input type="text" className="form-control" required />
										</div>

										<div className="col-sm-6">
											<label>Phone *</label>
											<input type="tel" className="form-control" required {...register('phone')} />
										</div>
									</div>

									<label>Order notes (optional)</label>
									<textarea className="form-control" cols="30" rows="4" {...register('order_note')} placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
								</div>
								<aside className="col-lg-3">
									<div className="summary">
										<h3 className="summary-title">Your Order</h3>

										<table className="table table-summary">
											<thead>
												<tr>
													<th>Product</th>
													<th>Total</th>
												</tr>
											</thead>

											<tbody>
												{
													cartItems.map(cartItem => (
														<tr key={cartItem.id}>
															<td><a href="#">{cartItem.product.attributes.title}</a></td>
															<td>GHs {calculate_discount(cartItem.product)}</td>
														</tr>
													))
												}
												<tr className="summary-subtotal">
													<td>Subtotal:</td>
													<td>GHs {getTotal()}</td>
												</tr>
												<tr>
													<td>Shipping:</td>
													<td>GHs {deliveryCost}</td>
												</tr>
												<tr className="summary-total">
													<td>Total:</td>
													<td>GHs {deliveryCost + getTotal()}</td>
												</tr>
											</tbody>
										</table>

										<div className="accordion-summary" id="accordion-payment">
											{/* <div className="card">
												<div className="card-header" id="heading-1">
													<h2 className="card-title">
														<a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
															Direct bank transfer
														</a>
													</h2>
												</div>
												<div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
													<div className="card-body">
														Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
													</div>
												</div>
											</div>

											<div className="card">
												<div className="card-header" id="heading-2">
													<h2 className="card-title">
														<a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
															Check payments
														</a>
													</h2>
												</div>
												<div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion-payment">
													<div className="card-body">
														Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
													</div>
												</div>
											</div> */}

											<div className="card">
												<div className="card-header" id="heading-3">
													<h2 className="card-title">
														<a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
															Cash on delivery
														</a>
													</h2>
												</div>
												<div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#accordion-payment">
													<div className="card-body">
														Pay physical cash when item is delivered to you
													</div>
												</div>
											</div>

											{/* <div className="card">
												<div className="card-header" id="heading-4">
													<h2 className="card-title">
														<a className="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
															PayPal <small className="float-right paypal-link">What is PayPal?</small>
														</a>
													</h2>
												</div>
												<div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordion-payment">
													<div className="card-body">
														Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
													</div>
												</div>
											</div>

											<div className="card">
												<div className="card-header" id="heading-5">
													<h2 className="card-title">
														<a className="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
															Credit Card (Stripe)
															<img src="assets/images/payments-summary.png" alt="payments cards" />
														</a>
													</h2>
												</div>
												<div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
													<div className="card-body"> Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
													</div>
												</div>
											</div> */}
										</div>

										<button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
											<span className="btn-text">Place Order</span>
											<span className="btn-hover-text">Place Order</span>
										</button>
									</div>
								</aside>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Checkout