import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
 
const userEmptyState = {
  user: '',
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: userEmptyState,
  reducers: {
    createUser: (_, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return userEmptyState;
    },
  }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions;


export const useUserInformation = () => {
  const { user, email } = useSelector(state => state.user);

  return {
    user,
    email,
  }
}
