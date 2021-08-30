import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../Asset/Style';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Post = (props) => {

  const classes = useStyles();

  const {title, body, id} = props.post;

  return (
    <React.Fragment>
      <CssBaseline/>
      <Box component='div' className={classes.box}>
        <Typography variant='subtitle1' className={classes.title} gutterBottom>
          Title: {title}
        </Typography>
        <Typography variant='body1' className={classes.body}>
          {body}
        </Typography>
        <Link to={`/post/${id}`} style={{textDecoration: 'none'}}>
          <Button variant="contained" color="secondary">
            Post Details
          </Button>
        </Link>
      </Box>
      
    </React.Fragment>
  );
};

export default Post;