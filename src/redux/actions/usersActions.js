import axios from 'axios';

export const filterByName = (name) => (dispatch, getState) => {
  try {
    const users = getState().users.users;
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));

    dispatch({
      type: 'FILTER_BY_NAME',
      payload: filteredUsers
    })
  }
  catch (error) {
    console.log(error);
  }
}

export const setModalData = (modalData) => (dispatch, getState) => {
  try {
    const modal = getState().users.modal;
    const data = { ...modal, ...modalData };

    dispatch({
      type: 'SET_MODAL_DATA',
      payload: data
    })
  }
  catch (error) {
    console.log(error);
  }
}

export const fetchData = () => async (dispatch, getState) => {
  try {
    const query = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: 'FETCH_DATA',
      payload: query.data
    })
  }
  catch (error) {
    console.log(error);
  }
}

export const addUser = (user) => (dispatch, getState) => {
  try {
    const users = getState().users.users;
    const newUsers = [...users, user]

    dispatch({
      type: 'ADD_USER',
      payload: newUsers
    })
  }
  catch (error) {
    console.log(error);
  }
}

export const editUser = (data) => (dispatch, getState) => {
  try {
    const users = getState().users.users;
    const filtered = getState().users.filtered;
    const newUsers = users.map((user) => user.id === data.id ? { ...data, edited: true } : user);
    const filteredUsers = filtered.map((user) => user.id === data.id ? { ...data, edited: true } : user);

    dispatch({
      type: 'EDIT_USER',
      payload: { newUsers, filteredUsers }
    })
  }
  catch (error) {
    console.log(error);
  }
}

export const removeUser = (id) => (dispatch, getState) => {
  try {
    const users = getState().users.users;
    const filtered = getState().users.filtered;
    const newUsers = users.filter((user) => user.id !== id);
    const filteredUsers = filtered.filter((user) => user.id !== id);

    dispatch({
      type: 'REMOVE_USER',
      payload: { newUsers, filteredUsers }
    })
  }
  catch (error) {
    console.log(error);
  }
}