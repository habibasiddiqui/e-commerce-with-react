import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SingleProductDialog from '../components/SingleProductDialog';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Home() {
    const classes = useStyles();
    return (
        <div>
            {/* <ul>
                <li>Men Clothing</li>
                <li>Women Clothing</li>
                <li>Jewelery</li>
                <li>Electronics</li>
            </ul> */}
            <div className={classes.root}>
            <Paper elevation={3} >Men's Clothing</Paper>
            <Paper elevation={3} >Women's Clothing</Paper>
            <Paper elevation={3} >Jewelery</Paper>
            <Paper elevation={3} >Electronics</Paper>

            </div>

            <SingleProductDialog />
        </div>
    )
}

export default Home
