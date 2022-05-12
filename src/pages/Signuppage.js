import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";

const Signuppage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signup} = useAuth();
    const password2Ref = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e)  => {
        e.preventDefault()
        
        if (passwordRef.current.value !== password2Ref.current.value){
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/login');
        } catch(error) {
            setError(error?.message);
        }
        setLoading(false)
    }
    

  return (
    <div className="signup">
        <form onSubmit={handleSubmit} method="post" >
            
            <div className="icon_header"><FontAwesomeIcon icon={faUser} /></div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword2">Comfirm Password</label>
                <input type="password" ref={password2Ref} className="form-control" id="exampleInputPassword2" placeholder="Comfirm Password" />
            </div>
            {/* <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button disabled={loading} type="submit" className="btn btn-primary">Sign up</button>
            {error && <p>{error}</p>  }
            <p>Already have an account? <Link to="/login">Login</Link> </p>
        </form>
        
    </div>
  )
}

export default Signuppage;