import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
// import {  } from '../redux/actions/usersActions';


const Users = () => {
  // const [, ] = useState();

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid px={4} py={1}>
      <AcUnitRoundedIcon/>
    </Grid>
  )
}

export default Users;

const useStyles = makeStyles(() => ({

}))