import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';


export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if( isFormValid() ){
            console.log('form correct')
        }
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {

            console.log('Name is required');
            dispatch( setError( 'Name is required' ));
            return false;

        } else if ( !validator.isEmail(email) ){

            console.log('email is not valid');
            dispatch( setError( 'Email is not valid' ));
            return false;

        }else if( password !== password2 || password.length < 5 ){

            console.log('password should be at least 6 characters and match');
            dispatch( setError( 'Password should be at least 5 characters and match' ));
            return false;
        }

        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

                <div className="auth__alert-error">
                    Hola Mundo
                </div>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-5"
                >
                    Register
                </button>

                <div className="mt-5">
                    <Link to='/auth/login' className="link">
                        Already registered?
                    </Link>
                </div>
            </form>
        </>
    )
}
