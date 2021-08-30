import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../Asset/Style';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import picture from '../../Asset/image.jpg';

const Comment = (props) => {
  const classes = useStyles();
  const {body, email, name} = props.comment;
  //console.log(comment);
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container className={classes.commentBox}>
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <img src={picture} alt="" style={{width: '100px', borderRadius: '50%', height: '100px'}} />
        </Grid>
        <Grid item lg={10}>
          <Typography variant='h5' gutterBottom>
            <strong>Name: </strong>{name}
          </Typography>
          <Typography variant='h6' gutterBottom>
            <strong>Email: </strong>{email}
          </Typography>
          <Typography variant='body1' gutterBottom>
            <strong>Comment: </strong>{body}
          </Typography>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Comment;