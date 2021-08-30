import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  blogTitle: {
    marginTop: '20px',
  },
  box: {
    padding: '20px',
    background: '#fff',
    height: '100%',
    marginTop: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    cursor: 'pointer',
    textAlign: 'justify',
    transition: 'all linear .3s',
    '&:hover': {
      transform: 'translateY(-5px)'
    },
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    paddingBottom: '10px',
  },
  body: {
    color: '#66666',
    fontSize: '16px',
    lineHeight: '26px',
    marginBottom: '20px'
  },
  commentBox: {
    padding: '30px',
    background: '#fff',
    borderRadius: '5px',
    border: '1px solid #ddd',
  }
}));


export default useStyles;