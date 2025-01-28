import axiosClient from "./APIClient";

const usersAPI = {
  getAllUsers: () => axiosClient.get("/User/users"),
  getUserByID: (id: string) => axiosClient.get(`/User/users/${id}`),
  createUser: (data: any) => axiosClient.post("/Auth/register", data),
  updateUser: (data: any) => axiosClient.put(`/User/users`, data),
  deleteUser: (id: string) => axiosClient.delete(`/User/users/${id}`),
};

export default usersAPI;
