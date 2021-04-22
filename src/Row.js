import React from 'react';
import Card from './Card';
import { Grid } from "@material-ui/core" 
import { makeStyles } from "@material-ui/core/styles"
import './row.css';

const useStyles = makeStyles(
  {
    gridContainer: {
      paddingLeft: '40px',
      paddingRight: '40px'
    }  
  }
) 

const Row = ({ songsToRender }) => {
  const classes = useStyles();
  return (
    <Grid container spacing = {4} className = {classes.gridContainer} justify = "center">
        {
          songsToRender.map((song, index) => ( 
          <Grid item xs = {12} sm = {6} md = {4} key = {index}>
            <Card song = {song}/>
          </Grid>  
        ))}
    </Grid>
  );
}
  

export default Row;
