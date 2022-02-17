import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Grid,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import Warning from '../components/Warning';
import User from '../components/User';
import SearchInput from '../components/SearchInput';
import ModalView from '../components/ModalView';
import { debounce } from 'lodash';
import { EditRounded, DeleteRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setModalData, addUser, editUser, filterByName } from '../redux/actions/usersActions';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const filteredUsers = useSelector((state) => state.users.filtered);
  const modal = useSelector((state) => state.users.modal);

  useEffect(() => {
    dispatch(fetchData());
  }, [])

  const searchByName = debounce((e) => {
    const text = e.target.value;
    setSearchQuery(text);
    dispatch(filterByName(text));
  }, 500);

  const getModalView = () => {
    switch (modal.type) {
      case 'add':
        return <User type='add' onSubmit={(data) => onSubmitForm(data)} />;
      case 'edit':
        return <User type='edit' onSubmit={(data) => onSubmitForm(data)} />;
      case 'delete':
        return <Warning id={modal.data.id} name={modal.data.name} />;
    }
  }

  const openModal = (type, data) => {
    dispatch(setModalData({
      isOpen: true,
      type: type,
      data: data
    }))
  }

  const closeModal = () => {
    dispatch(setModalData({ isOpen: false }));
  }

  const onSubmitForm = (data) => {
    const user = {
      name: data.name,
      email: data.email,
      website: data.website,
      company: { name: data.company }
    }

    const usersIds = users.map(u => u.id);
    const newId = Math.max(...usersIds) + 1;

    modal.type === 'add'
      ? dispatch(addUser({ ...user, id: newId }))
      : dispatch(editUser({ ...user, id: modal.data.id }));

    dispatch(setModalData({ isOpen: false }));
  }

  const renderTableRows = (list) => {
    return list?.map((user, index) => (
      <TableRow
        hover
        key={index}
        className={classes.tableRow}
        sx={styles.tableRow}
      >
        <TableCell style={user.edited && styles.edited}>{user.name}</TableCell>
        <TableCell style={user.edited && styles.edited}>{user.email}</TableCell>
        <TableCell style={user.edited && styles.edited}>{user.website}</TableCell>
        <TableCell style={user.edited && styles.edited}>{user.company.name}</TableCell>
        <TableCell align='center'>
          <IconButton onClick={() => openModal('edit', list[index])}>
            <EditRounded sx={styles.actionButton} />
          </IconButton>
          <IconButton onClick={() => openModal('delete', list[index])}>
            <DeleteRounded sx={styles.actionButton} />
          </IconButton>
        </TableCell>
      </TableRow>
    ))
  }

  return (
    <Grid px={4} py={1} bgcolor='#F6F7F9'>
      <Box className={classes.buttonsBox}>
        <SearchInput
          placeholder='Search user'
          style={styles.searchInput}
          onChange={(e) => searchByName(e)}
        />
        <Button
          variant="contained"
          sx={styles.button}
          onClick={() => openModal('add')}>
          Add user
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchQuery?.length > 1
              ? renderTableRows(filteredUsers)
              : renderTableRows(users)
            }
          </TableBody>
        </Table>
      </TableContainer>
      <ModalView
        isOpen={modal.isOpen}
        content={getModalView()}
        onClose={() => closeModal()}
      />
    </Grid>
  )
}

export default Users;

const useStyles = makeStyles(() => ({
  tableRow: {
    userSelect: 'none',
  },
  buttonsBox: {
    display: 'flex',
    marginBlock: 10,
  },
  warn: {
    color: '#ff9800',
    textAlign: 'center',
  }
}))

const styles = {
  searchInput: {
    flex: 1
  },
  table: {
    minWidth: 650
  },
  tableRow: {
    '&:last-child td, &:last-child th': {
      border: 0
    }
  },
  button: {
    width: 150,
    ml: 1
  },
  actionButton: {
    width: 20,
    height: 20,
    color: '#8E8E8E',
  },
  edited: {
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
} 