import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SpotifyPlayer from 'react-spotify-player';

const useStyles = makeStyles({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '0.9rem',
    lineHeight: 1.4,
    textAlign: 'left',
    minWidth: 275,
    backgroundColor: 'black',
    color: '#FFFFFF'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    display : 'block',
    fontWeight: "bolder",
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontSize: '1.17em'
  },
  pos: {
    marginBottom: 12,
  },
  description: {
      margin: '0.5rem 0 0.25rem'
  },
  artist : {
      color: '#999'
  },
});
const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

// Add date and lnks maybe idk

export default function OutlinedCard( {song} ) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>    
        <SpotifyPlayer
            uri={song.uri}
            size={size}
            view={view}
            theme={theme}
        />
        <div className = {classes.title}>
            {song.title}
        </div>
        <div className = {classes.artist}>
            {song.artist}
        </div>
        <div className = {classes.description}>
            {song.content}
        </div>
        <div className = {classes.artist}>
            {song.createdAt}
        </div>
      </CardContent>
    </Card>
  );
}
