import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(10),
            width: theme.spacing(50),
            height: theme.spacing(70),
        },
    },
}));

function Login(props) {

    const classes = useStyles();

    const {
        email, 
        setEmail, 
        password, 
        setPassword,
        hasAccount,
        setHasAccount,
        errorEmail,
        errorPwd,
        handleSignIn,
        handleSignUp
    } = props;

    // const validationSchema = yup.object({
    //     email: yup
    //         .string('Enter your email')
    //         .email('Enter a valid email')
    //         .required('Email is required'),
    //     password: yup
    //         .string('Enter your password')
    //         .min(8, 'Password should be of minimum 8 characters length')
    //         .required('Password is required'),
    // });


    // const formik = useFormik({
    //     initialValues: {
    //         email: 'foobar@example.com',
    //         password: 'foobar',
    //     },
    //     validationSchema: validationSchema,
    //     onSubmit: (values) => {
    //         alert(JSON.stringify(values, null, 2));
    //     },
    // });

    return (
        <div>
            <div className={classes.root}>
                <Paper elevation={3} >
                    {/* <form onSubmit={formik.handleSubmit}> */}
                        <TextField
                        className='log-input'
                            // fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // error={formik.touched.email && Boolean(formik.errors.email)}
                            // helperText={formik.touched.email && formik.errors.email}
                        />
                        <p>{errorEmail}</p>
                        <TextField
                        className='log-input'
                            // fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // error={formik.touched.password && Boolean(formik.errors.password)}
                            // helperText={formik.touched.password && formik.errors.password}
                        />
                        <p>{errorPwd}</p>
                        <div>
                            {hasAccount ? (
                                <>
                                 <Button className='log-input' color="primary" variant="contained" fullWidth onClick={handleSignIn}>
                                 Log In
                                </Button>
                                <p className='log-input'>Don't have an account? Sign up <span onClick={handleSignUp}>here</span></p>
                                </>
                            ) : (
                                <>
                                <Button className='log-input' color="primary" variant="contained" fullWidth onClick={handleSignUp}>
                                Sign Up
                                </Button>
                                <p class='log-input'>Already registered? Sign in <span onClick={handleSignIn}>here</span></p>
                                </>
                                )
                            }
                        </div>
                         {/* <Button className='log-input' color="primary" variant="contained" fullWidth type="submit">
                             Log In
                         </Button> */}
                    {/* </form> */}
                </Paper>
            </div>
        </div>

    )
}

export default Login;

