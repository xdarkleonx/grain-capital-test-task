import { makeStyles } from '@mui/styles';
import { Paper, InputBase } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchInput = props => {
  const classes = useStyles();

  return (
    <Paper
      variant='outlined'
      component='form'
      className={classes.root}
      style={props.style}
    >
      <SearchRoundedIcon />
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Paper>
  )
}

export default SearchInput;

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 20,
    padding: '5px 5px 5px 15px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    flex: 1,
  }
}))