import { makeStyles } from '@mui/styles';
import {
  Box,
  Typography,
  Button
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeUser, setModalData } from '../redux/actions/usersActions';

const Warning = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
    dispatch(setModalData({ isOpen: false }));
  }

  return (
    <Box className={classes.root}>
      <Typography mb={2} variant='h5'>
        Are you sure want delete {props.name}?
      </Typography>
      <Button
        fullWidth
        color='error'
        variant="contained"
        onClick={() => deleteUser(props.id)}
      >
        Delete user
      </Button>
    </Box>
  )
}

export default Warning;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))