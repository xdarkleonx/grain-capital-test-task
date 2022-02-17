export const addUser = () => (dispatch, getState) => {
  try {

    dispatch({
      type: 'ADD_USER',
      // payload: 
    })
  }
  catch (error) {
    console.log(error);
  }
}

export const editUser = () => (dispatch, getState) => {
  try {

    dispatch({
      type: 'EDIT_USER',
      // payload: 
    })
  }
  catch (error) {
    console.log(error);
  }
}

export const removeUser = () => (dispatch, getState) => {
  try {


    dispatch({
      type: 'REMOVE_USER',
      // payload: 
    })
  }
  catch (error) {
    console.log(error);
  }
}