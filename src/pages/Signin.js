// import React from "react";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from "@material-ui/core/styles";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: theme.spacing(10),
//       width: theme.spacing(50),
//       height: theme.spacing(70),
//     },
//   },
// }));

// function Login(props) {
//   const classes = useStyles();

//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     hasAccount,
//     setHasAccount,
//     errorEmail,
//     errorPwd,
//     handleSignIn,
//     handleSignUp,
//   } = props;

//   return (
//     <div>
//       <div className={classes.root}>
//         <Paper elevation={3}>
//           {/* <form onSubmit={formik.handleSubmit}> */}
//           <TextField
//             className="log-input"
//             // fullWidth
//             id="email"
//             name="email"
//             label="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             // error={formik.touched.email && Boolean(formik.errors.email)}
//             // helperText={formik.touched.email && formik.errors.email}
//           />
//           <p>{errorEmail}</p>
//           <TextField
//             className="log-input"
//             // fullWidth
//             id="password"
//             name="password"
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             // error={formik.touched.password && Boolean(formik.errors.password)}
//             // helperText={formik.touched.password && formik.errors.password}
//           />
//           <p>{errorPwd}</p>
//           <div>
//             {hasAccount ? (
//               <>
//                 <Button
//                   className="log-input"
//                   color="primary"
//                   variant="contained"
//                   fullWidth
//                   onClick={handleSignIn}
//                 >
//                   Log In
//                 </Button>
//                 <p className="log-input">
//                   Don't have an account? Sign up <span onClick={handleSignUp}>here</span>
//                 </p>
//               </>
//             ) : (
//               <>
//                 <Button
//                   className="log-input"
//                   color="primary"
//                   variant="contained"
//                   fullWidth
//                   onClick={handleSignUp}
//                 >
//                   Sign Up
//                 </Button>
//                 <p class="log-input">
//                   Already registered? Sign in <span onClick={handleSignIn}>here</span>
//                 </p>
//               </>
//             )}
//           </div>
//           {/* <Button className='log-input' color="primary" variant="contained" fullWidth type="submit">
//                              Log In
//                          </Button> */}
//           {/* </form> */}
//         </Paper>
//       </div>
//     </div>
//   );
// }

// export default Login;



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../images/auth4.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: '#ffc107',
    backgroundColor: theme.palette.secondary.main,
    color: "black",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#28a745",
    color: "white",
    "&:hover": {
      backgroundColor: "#218237",
      color: "white",
    },
    "&:focus": {
      backgroundColor: "#218237",
      color: "white",
    },
  },
}));

export default function Signin(props) {
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
    handleSignUp,
  } = props;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} lg={8} className={classes.image} />
      {/* <Grid item xs={false} sm={4} md={7}><img src={bgImg} /></Grid> */}

      <Grid item xs={12} sm={8} md={5} lg={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // autoFocus
                />
                <span>{errorEmail}</span>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>{errorPwd}</span>
              </Grid>

            </Grid>

            <Button
              // type="submit"
              onClick={handleSignIn}
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2" className="auth-link">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
