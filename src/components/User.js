import { makeStyles } from '@mui/styles';
import { Box, Typography, Button } from '@mui/material';
import FormTextField from './FormTextField';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { requiredAndNotEmpty, emailValidate, minLengthTwo } from '../utils/validators';

let User = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant='h4'>
        {props.type === 'add' ? 'Add new user' : 'Edit user'}
      </Typography>
      <form
        style={styles.form}
        onSubmit={props.handleSubmit}
      >
        <Field
          name='name'
          label='Name'
          type='text'
          component={FormTextField}
          validate={[requiredAndNotEmpty, minLengthTwo]}
        />
        <Field
          name='email'
          label='Email'
          component={FormTextField}
          validate={[requiredAndNotEmpty, emailValidate]}
        />
        <Field
          name='website'
          label='Website'
          component={FormTextField}
          validate={[requiredAndNotEmpty, minLengthTwo]}
        />
        <Field
          name='company'
          label='Company'
          component={FormTextField}
          validate={[requiredAndNotEmpty, minLengthTwo]}
        />
        <Button
          type='submit'
          variant="contained"
          sx={styles.button}
        >
          Save
        </Button>
      </form>
    </Box>
  )
}

User = reduxForm({ form: 'userForm' })(User);

User = connect(state => {
  const userId = state.users.modal?.data?.id;
  const user = state.users.users.find(u => u.id === userId);
  return {
    initialValues: {
      name: user?.name,
      email: user?.email,
      website: user?.website,
      company: user?.company?.name
    }
  }
})(User)

export default User;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const styles = {
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    alignSelf: 'flex-end',
    width: 150,
    marginTop: 2
  }
}