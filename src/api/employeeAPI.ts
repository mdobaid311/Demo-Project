import axiosClient from "./APIClient";

const employeesAPI = {
  getAllEmployees: () => axiosClient.get("/Employee/employee"),
  getEmployeeByID: (id: string) => axiosClient.get(`/Employee/employee/${id}`),
  createEmployee: (data: any) => axiosClient.post("/Employee/employee", data),
  updateEmployee: (data: any) => axiosClient.put(`/Employee/employee`, data),
  deleteEmployee: (id: string) =>
    axiosClient.delete(`/Employee/employee/${id}`),
};

export default employeesAPI;
