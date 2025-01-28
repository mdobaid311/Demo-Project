import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  email: string;
  userType: string;
  userID: string;
  firstname: string;
  lastname: string;
}

const initialState: userState = {
  email: "",
  userType: "",
  userID: "",
  firstname: "",
  lastname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string;
        userType: string;
        userID: string;
        firstname: string;
        lastname: string;
      }>
    ) => {
      const { email, userType, userID, firstname, lastname } = action.payload;
      state.email = email;
      state.userType = userType;
      state.userID = userID;
      state.firstname = firstname;
      state.lastname = lastname;
      localStorage.setItem("email", email);
      localStorage.setItem("userType", userType);
      localStorage.setItem("userID", userID);
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
    },
    logout: () => {
      localStorage.setItem("userType", "");
      localStorage.setItem("email", "");
      localStorage.setItem("userID", "");
      localStorage.setItem("firstname", "");
      localStorage.setItem("lastname", "");
      localStorage.setItem("token", "");
      localStorage.setItem("refresh_token", "");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
