const initState = {
  users: [],
  filtered: [],
  modal: {
    isOpen: false,
  }
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_MODAL_DATA':
      console.log(action);
      return {
        ...state,
        modal: action.payload
      };
    case 'FILTER_BY_NAME':
      console.log(action);
      return {
        ...state,
        filtered: action.payload
      };
    case 'FETCH_DATA':
      console.log(action);
      return {
        ...state,
        users: action.payload
      };
    case 'ADD_USER':
      console.log(action);
      return {
        ...state,
        users: action.payload
      };
    case 'EDIT_USER':
      console.log(action);
      return {
        ...state,
        users: action.payload.newUsers,
        filtered: action.payload.filteredUsers
      };
    case 'REMOVE_USER':
      console.log(action);
      return {
        ...state,
        users: action.payload.newUsers,
        filtered: action.payload.filteredUsers
      };

    default:
      return state;
  }
}

export default usersReducer;