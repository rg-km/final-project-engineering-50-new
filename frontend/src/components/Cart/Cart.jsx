import './Cart.css';
import { useCart } from 'react-use-cart';
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useStore from "../../useStore";
import {Toast, ToastContainer} from "react-bootstrap";

const Cart = () => {
    const user = useStore((state) => state.user);
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    const [isCheckoutShown, setIsCheckoutShown] = useState(false);
    const [isToastShown, setIsToastShown] = useState(false);
    if(isEmpty) return <h5 className='text-center py-5'>My Cart is Empty.</h5>
    return (
        <div className='container-fluid py-3'>
            <div className="row justify-content-center">
                <h4 className="text-center py-3 text-decoration-underline">My Cart</h4>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                    <div className="d-flex justify-content-center py-3">
                        <p className='position-relative fw-bolder text-title'>Cart <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                        <p className='fw-bolder text-title'>Total Items <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
                    </div>
                    <div>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return(
                                        <tr key={index} className='align-middle'>
                                            <td><img src={item.img} className='img-cart' alt={item.title} /></td>
                                            <td>{item.title}</td>
                                            <td>Rp.{item.price}.000,00</td>
                                            <td>Quantity: {item.quantity}</td>
                                            <td>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-outline-dark ms-1'>-</button>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-outline-dark ms-1'>+</button>
                                                <button onClick={() => removeItem(item.id)} className='btn btn-outline-danger ms-5'>Remove Item</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between py-5">
                        <button onClick={() => emptyCart()} className="btn btn-outline-danger">Clear All</button>
                        <h3>Total Price: Rp.{cartTotal}.000,00</h3>
                    </div>
                    <div className="d-flex justify-content-center py-5">
                        <button onClick={() => setIsCheckoutShown(true)} className="btn btn-primary">Checkout</button>
                        <Modal show={isCheckoutShown} onHide={() => setIsCheckoutShown(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Checkout: </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Halo {user.name}! Silakan transfer ke:</p>
                                <h2>Bank Central Asia</h2>
                                <p>043123232</p>
                                <h3>Total Price: Rp.{cartTotal}.000,00</h3>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => setIsCheckoutShown(false)}>
                                    Batal
                                </Button>
                                <Button variant="primary" onClick={() => {
                                    setIsCheckoutShown(false);
                                    setIsToastShown(true);
                                }}>
                                    Checkout
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <ToastContainer position='bottom-center'>
                            <Toast show={isToastShown} onClose={() => setIsToastShown(false)}>
                                <Toast.Header>
                                    <strong className="me-auto">Oder processed!</strong>
                                    <small>right now</small>
                                </Toast.Header>
                                <Toast.Body>We're processing your order now. Hang tight!</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
