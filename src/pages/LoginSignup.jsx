import React from 'react';
import './CSS/LoginSignup.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailValidator from 'email-validator';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Validation schema for Login
  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .test('is-valid-email', 'Invalid email address', (value) => emailValidator.validate(value)),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Validation schema for Registration
  const registrationValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .test('is-valid-email', 'Invalid email address', (value) => emailValidator.validate(value)),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('You must accept the terms and conditions'),
  });

  // Formik for Login
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // Formik for Registration
  const registrationFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    validationSchema: registrationValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="loginsignup">
      <div className="wrapper">
        {isLogin ? (
          <>
            <h2>Login</h2>
            <form onSubmit={loginFormik.handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={loginFormik.values.email}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                />
                {loginFormik.touched.email && loginFormik.errors.email ? (
                  <div className="error">{loginFormik.errors.email}</div>
                ) : null}
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                />
                {loginFormik.touched.password && loginFormik.errors.password ? (
                  <div className="error">{loginFormik.errors.password}</div>
                ) : null}
              </div>
              <div className="input-box button">
                <input type="submit" value="Login Now" />
              </div>
              <div className="text">
                <h3>
                  Don't have an account?&nbsp;
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Register now
                  </a>
                </h3>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2>Registration</h2>
            <form onSubmit={registrationFormik.handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={registrationFormik.values.name}
                  onChange={registrationFormik.handleChange}
                  onBlur={registrationFormik.handleBlur}
                />
                {registrationFormik.touched.name && registrationFormik.errors.name ? (
                  <div className="error">{registrationFormik.errors.name}</div>
                ) : null}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={registrationFormik.values.email}
                  onChange={registrationFormik.handleChange}
                  onBlur={registrationFormik.handleBlur}
                />
                {registrationFormik.touched.email && registrationFormik.errors.email ? (
                  <div className="error">{registrationFormik.errors.email}</div>
                ) : null}
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Create password"
                  name="password"
                  value={registrationFormik.values.password}
                  onChange={registrationFormik.handleChange}
                  onBlur={registrationFormik.handleBlur}
                />
                {registrationFormik.touched.password && registrationFormik.errors.password ? (
                  <div className="error">{registrationFormik.errors.password}</div>
                ) : null}
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={registrationFormik.values.confirmPassword}
                  onChange={registrationFormik.handleChange}
                  onBlur={registrationFormik.handleBlur}
                />
                {registrationFormik.touched.confirmPassword && registrationFormik.errors.confirmPassword ? (
                  <div className="error">{registrationFormik.errors.confirmPassword}</div>
                ) : null}
              </div>
              <div className="policy">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={registrationFormik.values.acceptTerms}
                  onChange={registrationFormik.handleChange}
                  onBlur={registrationFormik.handleBlur}
                />
                <h3>I accept all terms & conditions</h3>
                {registrationFormik.touched.acceptTerms && registrationFormik.errors.acceptTerms ? (
                  <div className="error">{registrationFormik.errors.acceptTerms}</div>
                ) : null}
              </div>
              <div className="input-box button">
                <input type="submit" value="Register Now" />
              </div>
              <div className="text">
                <h3>
                  Already have an account?{' '}
                  <a href="#" onClick={() => setIsLogin(true)}>
                    Login now
                  </a>
                </h3>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;