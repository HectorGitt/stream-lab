import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";


const ForgotPassword = () => {

    const emailRef = useRef()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const {resetPassword} = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setLoading(false)
            navigate('/login')
        } catch (error) {
            setError(error?.message)
        }
        setLoading(false)
    }

  return (
    <div className="login">
        <div>
            <form onSubmit={handleSubmit} >
                <div className="icon_header"><FontAwesomeIcon icon={faUser} /></div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" required ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
               
                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <p><small>An email will be sent to to you containing the details to reset your password</small></p>
                <button disabled={loading} type="submit" className="btn btn-primary">Proceed</button>
                {error && <p>{error}</p>  }
                <p>Dont have an account? <Link to="/signup">Sign up</Link> </p>
                <p>Remember Password? <Link to="/login">Login</Link></p>
                
            </form> 
        </div>
    </div>
  )
}

export default ForgotPassword;