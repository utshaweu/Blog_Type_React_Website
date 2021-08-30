import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const NotFound = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Typography variant='h3' align='center'>
          Page Not Found
        </Typography>
        <Typography variant='h6' align='center'>
          404
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;