import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Asset/Style';
import Box from '@material-ui/core/Box';
import Comment from '../Comment/Comment';

const PostDetail = () => {

  const classes = useStyles();

  const {id} = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const {body, title} = post;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
      setPost(data);
      //console.log(data);
    } )
  },[])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(data => {
      setComments(data);
      //console.log(data);
    })
  },[])

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent='center'>
          <Grid item lg={8}>
            <Box component="div" className={classes.box}>
              <Typography variant='h2' gutterBottom>
                Id: {id} 
              </Typography>
              <Typography variant='subtitle1' className={classes.title} gutterBottom>
                Title: {title}
              </Typography>
              <Typography variant='body1' className={classes.body}>
                {body}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent='center' style={{marginTop: '30px'}}>
          {
            comments.map(comment => (
              <Grid item lg={8}>
                <Comment comment={comment} key={comment.id}></Comment>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PostDetail;