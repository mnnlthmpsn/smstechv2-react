import { useContext, useEffect } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import DeliveryWidget from "../components/deliveryWidget"
import { CartContext } from "../contexts/cartContext"

const Cart = () => {

	const { cartItems, calculate_discount, inc_dec_qty } = useContext(CartContext)

	const { control, register } = useForm();
	const { fields, update } = useFieldArray({
		control, // control props comes from useForm (optional: if you are using FormContext)
		name: "quantities", // unique name for your Field Array
	})

	const onQtyChange = (val, cart_item_id) => {
		inc_dec_qty(cart_item_id, val)
	}

	const remove = cart_item_id => {}

	useEffect(() => {
		cartItems.map((item, index) => update(index, { value: item.qty }))
	}, [cartItems])

	return (
		<main className="main">
			<div className="page-header text-center" style={{ backgroundImage: 'url(assets/images/page-header-bg.jpg)' }}>
				<div className="container">
					<h1 className="page-title">Shopping Cart<span>Shop</span></h1>
				</div>
			</div>
			<nav aria-label="breadcrumb" className="breadcrumb-nav">
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><Link to="/">Home</Link></li>
						<li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
						<li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
					</ol>
				</div>
			</nav>

			<div className="page-content">
				<div className="cart">
					<div className="container">
						<div className="row">
							<div className="col-lg-9">
								<table className="table table-cart table-mobile">
									<thead>
										<tr>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
											<th></th>
										</tr>
									</thead>

									<tbody>
										{
											fields.map((field, index) => (
												<tr key={cartItems[index]?.id}>
													<td className="product-col">
														<div className="product" style={{ backgroundColor: '#f2f2f2' }}>
															<figure className="product-media">
																<a href="#">
																	<img src={cartItems[index]?.product.attributes.images.data[0].attributes.url} alt="Product image" />
																</a>
															</figure>

															<h3 className="product-title">
																<a href="#">{cartItems[index]?.product.attributes.title}</a>
															</h3>
														</div>
													</td>
													<td className="price-col">GHs {calculate_discount(cartItems[index]?.product)}
													</td>
													<td className="quantity-col">
														<div className="cart-product-quantity">
															<input type="number" className="form-control" {...register(`quantities.${index}.value`)} min="1" step="1" data-decimals="0" required onChange={e => onQtyChange(e.target.value, cartItems[index]?.id)} />
														</div>
													</td>
													<td className="total-col small">GHs {(calculate_discount(cartItems[index]?.product) * cartItems[index]?.qty).toFixed(2)}</td>
													<td className="remove-col"><button className="btn-remove" onClick={() => remove(cartItems[index].id)}><i className="icon-close"></i></button></td>
												</tr>
											))
										}
									</tbody>
								</table>

								{/* <div className="cart-bottom">
			            			<div className="cart-discount">
			            				<form action="#">
			            					<div className="input-group">
				        						<input type="text" className="form-control" required placeholder="coupon code" />
				        						<div className="input-group-append">
													<button className="btn btn-outline-primary-2" type="submit"><i className="icon-long-arrow-right"></i></button>
												</div>
			        						</div>
			            				</form>
			            			</div>

			            			<a href="#" className="btn btn-outline-dark-2"><span>UPDATE CART</span><i className="icon-refresh"></i></a>
		            			</div> */}
							</div>
							
							{/* delivery */}
							<DeliveryWidget />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Cart