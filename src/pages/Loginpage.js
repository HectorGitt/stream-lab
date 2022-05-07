import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { useRef, useState} from "react";

const Loginpage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e)  => {
        e.preventDefault()
        
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/movies');
        } catch {
            setError('Network Error');
        }
        setLoading(false)
    }
    

  return (
    <div className="login">
        <div>
            <form onSubmit={handleSubmit} >
                <div className="icon_header"><FontAwesomeIcon icon={faUser} /></div>
                {error && <p>{error}</p>  }
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                </div>
                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button disabled={loading} type="submit" className="btn btn-primary">Login</button>
                <p>Dont have an account? <Link to="/signup">Sign up</Link> </p>
            </form> 
        </div>
    </div>
  )
}

export default Loginpage;
