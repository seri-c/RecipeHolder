import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile } from '../../types';
import type { RootState } from '../../store';


const storedProfile : string | null = localStorage.getItem("currentUser");

const noProfileState : UserProfile = {
  username: "",
  name: "",
  email: "",
  avatar: "",
  isLoggedIn: false
};

const initialState: UserProfile = storedProfile ? JSON.parse(storedProfile) : noProfileState;

export const UserProfileSlice = createSlice({
  name: 'profile',

  initialState,

  reducers: {

    setProfile: (state, action: PayloadAction<Omit<UserProfile, 'isLoggedIn'>>) => {

      localStorage.setItem("currentUser", JSON.stringify(action.payload));

      return {
        ...action.payload,
        isLoggedIn: true
      }
    },

    updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      Object.assign(state, action.payload);
    },

    logoutProfile: (state, action) => {
      return noProfileState;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProfile, updateProfile, logoutProfile } = UserProfileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;

export default UserProfileSlice.reducer;