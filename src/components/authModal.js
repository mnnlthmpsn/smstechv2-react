import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { req_login, req_sign_up } from "../api/auth"
import { AuthContext } from "../contexts/authContext"

const AuthModal = () => {

    const { register, handleSubmit, reset } = useForm()
    const { setPayload } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data, target) => {
        setIsLoading(true)

        var res

        if (target === 'signup') {
            res = await req_sign_up({ username: data.reg_email, email: data.reg_email, password: data.reg_pwd })
        } else {
            res = await (req_login({ identifier: data.login_email, password: data.login_pwd }))
        }
        res && setPayload(res)

        setIsLoading(false)
        reset()
        close_modal()
    }

    const close_modal = () => { 
        const close_icon = document.getElementById('icon-close')
        close_icon.click()
    }

    return (
        <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="icon-close" id="icon-close"></i></span>
                        </button>

                        <div className="form-box">
                            <div className="form-tab">
                                <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="tab-content-5">
                                    <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                        <form onSubmit={handleSubmit((data) => onSubmit(data, 'login'))}>
                                            <div className="form-group">
                                                <label label htmlFor="singin-email">Email address *</label>
                                                <input type="text" className="form-control" id="singin-email" name="singin-email" {...register('login_email')} required />
                                            </div>

                                            <div className="form-group">
                                                <label label htmlFor="singin-password">Password *</label>
                                                <input type="password" className="form-control" id="singin-password" name="singin-password" {...register('login_pwd')} required />
                                            </div>

                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>{isLoading ? '...LOADING' : 'LOG IN'}</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                                    <label className="custom-control-label" label htmlFor="signin-remember">Remember Me</label>
                                                </div>

                                                <a href="#" className="forgot-link">Forgot Your Password?</a>
                                            </div>
                                        </form>
                                        <div className="form-choice">
                                            <p className="text-center">or sign in with</p>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <a href="#" className="btn btn-login btn-g">
                                                        <i className="icon-google"></i>
                                                        Login With Google
                                                    </a>
                                                </div>
                                                <div className="col-sm-6">
                                                    <a href="#" className="btn btn-login btn-f">
                                                        <i className="icon-facebook-f"></i>
                                                        Login With Facebook
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                        <form onSubmit={handleSubmit((data) => onSubmit(data, 'signup'))}>
                                            <div className="form-group">
                                                <label label htmlFor="register-email">Your email address *</label>
                                                <input type="email" className="form-control" id="register-email" name="register-email" {...register('reg_email')} required />
                                            </div>

                                            <div className="form-group">
                                                <label label htmlFor="register-password">Password *</label>
                                                <input type="password" className="form-control" id="register-password" name="register-password" {...register('reg_pwd')} required />
                                            </div>

                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>{isLoading ? '...LOADING' : 'SIGN UP'}</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>
                                            </div>
                                        </form>
                                        <div className="form-choice">
                                            <p className="text-center">or sign in with</p>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <a href="#" className="btn btn-login btn-g">
                                                        <i className="icon-google"></i>
                                                        Login With Google
                                                    </a>
                                                </div>
                                                <div className="col-sm-6">
                                                    <a href="#" className="btn btn-login  btn-f">
                                                        <i className="icon-facebook-f"></i>
                                                        Login With Facebook
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal