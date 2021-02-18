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
import { Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles({

  media: {
    height: '250px',
    maxWidth: '200px',
    objectFit: 'scale-down',
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
  },

  
});


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default function SingleProductDetails({details}) {
  const classes = useStyles();
  
  const {id, title, price, description, category, image } = details;
  console.log(details)
// console.log(props);


  return (
    //   <div>

    //   </div>
    // <Card  >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={image}
          title={title}
        />
        <CardContent >
        <Typography className={classes.title} title={title} gutterBottom variant="h5" >
            {title}
        </Typography>

        <table>
            <tr>
                <td>
                <Typography variant="body1"  component="p">
                    Product ID
                </Typography>
                </td>

                <td>
                <Typography variant="body1" color="textSecondary" component="p">
                    {id}
                </Typography>
                </td>
            </tr>

            <tr>
                <td>
                <Typography variant="body1"  component="p">
                    Price
                </Typography>
                </td>
                <td>
                <Typography variant="body1" color="textSecondary" component="p">
                    {price}
                </Typography>
                </td>
            </tr>

            <tr>
                <td >
                <Typography variant="body1"  component="p">
                    Category
                </Typography>
                </td>
                <td>
                <Typography  variant="body1" color="textSecondary" component="p">
                    {category}
                </Typography>
                </td>
            </tr>

            <tr>
                <td>
                <Typography variant="body1"  component="p">
                    Description
                </Typography>
                </td>
                <td>
                <Typography variant="body1" color="textSecondary" component="p">
                    {description}
                </Typography>
                </td>
            </tr>
        </table>
         
        </CardContent>
      </CardActionArea>
      
    // </Card>
  );
}
