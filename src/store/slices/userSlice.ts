import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  email: string;
  userName: string;
  userType: string;
  userID: string;
  clientID: string;
}

const initialState: userState = {
  email: "",
  userName: "",
  userType: "",
  userID: "",
  clientID: "",
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
        clientID: string;
        userName: string;
      }>
    ) => {
      const { email, userType, userID, clientID, userName } = action.payload;
      state.email = email;
      state.userType = userType;
      state.userID = userID;
      state.clientID = clientID;
      state.userName = userName;
      localStorage.setItem("userName", userName);
      localStorage.setItem("userType", userType);
      localStorage.setItem("userID", userID);
      localStorage.setItem("clientID", clientID);
    },
    logout: () => {
      localStorage.setItem("userType", "");
      localStorage.setItem("userName", "");
      localStorage.setItem("userID", "");
      localStorage.setItem("clientID", "");
      localStorage.setItem("access_token", "");
      localStorage.setItem("refresh_token", "");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
