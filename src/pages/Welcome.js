import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#007bff",
        color: "white",
        "&:hover": {
          backgroundColor: "#218237",
          color: "white",
        },
        "&:focus": {
          backgroundColor: "#218237",
          color: "white",
        },
    root: {
        width: '90%',
        margin: 'auto',
    }
    }
    }));

function Welcome({handleSignOut}) {

  const classes = useStyles();
  return (
        <div className={classes.root}>
            <h1>Welcome 
            </h1>
            <Button className={classes.submit}  onClick={handleSignOut}>Sign Out</Button>
        </div>
    )
}

export default Welcome
