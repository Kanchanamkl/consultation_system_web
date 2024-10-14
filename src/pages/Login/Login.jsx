import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../StoreContext/StoreContext';
import "../../colors/systemColors.scss";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn , setFirstName ,setRole , setUsername ,setLastName} = useContext(StoreContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // try {
        //     const response = await axios.post('http://localhost:8080/api/users/authenticate', {
        //         email: email,
        //         password: password
        //     });

        //     console.log("login-res",response)

        //     if (response.status === 200) {
        //         const role = response.data.role;
        //         const firstName = response.data.firstName;
        //         const lastName = response.data.firstName;
        //         const username = response.data.username;

        //         console.log("First Name:", firstName);
        //         console.log("Last Name:", lastName);
        //         console.log("Role:", role);
        //         console.log("username",username)
                
        //         setFirstName(firstName);
        //         setLastName(lastName);
        //         setUsername(username);
        //         setRole(role)

                setIsLoggedIn(true);
                navigate('/'); 
        //     }
        // } catch (error) {
        //     console.error('Login failed:', error);
        //     alert('Login failed. Please check your credentials.');
        // }
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundColor: '#D7E4FF' }}>
                <div className="bg-white p-3 rounded shadow" style={{width : '30vw' , height: '65vh', borderRadius: '10px', marginTop: '55px'}}>
                    <h2 className='mb-3 text-primary '>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email </strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                   
                    <p className='container my-2 mt-3'>Don&apos;t have an account?</p>
                    <Link to='/register' className="btn btn-secondary">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
