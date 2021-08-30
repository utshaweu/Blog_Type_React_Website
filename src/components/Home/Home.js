import React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Asset/Style';
import Post from '../Post/Post';


const Home = () => {
  
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  //console.log(posts);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  }, [])

  return (
    <React.Fragment>
      <CssBaseline/>
      <main>
        <div className={classes.container}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" color="textPrimary" className={classes.blogTitle} gutterBottom>
              Blog Website
            </Typography>
          </Container>
        </div>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {
              posts.map(post => (
                <Grid item sm={12} md={6} lg={4}>
                  <Post post={post} key={post.id} ></Post>
                </Grid>
               )  
              )
            }
          </Grid>
        </Container>
      </main>
      
    </React.Fragment>
  );
};

export default Home;