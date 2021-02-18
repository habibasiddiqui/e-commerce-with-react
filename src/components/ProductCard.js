import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import SingleProductDialog from './SingleProductDialog';

const useStyles = makeStyles({
  root: {
    maxWidth: '20rem',
    // boxShadow: '0 2px 4px -1px #555',
    margin: 'auto',
    marginBottom: '2rem',

  },
  media: {
    height: '250px',
    maxWidth: '200px',
    objectFit: 'scale-down',
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
    // border: '1px solid blue',
 
  },
  titleDiv: {
    overflow: 'hidden',
    maxHeight: '5rem'
  },
  actionDiv : {
    justifyContent: 'space-between',
  }
});


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default function ProductCard({product}) {
  const classes = useStyles();
  
  // console.log(product)
  const {id, title, price, description, category, image } = product;

  // for Details Dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={image}
          title={title}
        />
        <CardContent className={classes.titleDiv}>
          <Typography className={classes.title} title={title} gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionDiv}>
        <Button size="small" color="primary">
          Buy
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary" onClick={handleClickOpen}>
         View Details
        </Button>
        <SingleProductDialog open={open} setOpen={setOpen} 
         handleClose={handleClose} id={id}
         />

      </CardActions>
    </Card>
  );
}
