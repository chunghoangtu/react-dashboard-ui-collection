import { loginApi, type AuthDataType } from "../api/authApi";

export const loginService = async (data: AuthDataType) => {
  const response = await loginApi(data);
  localStorage.setitem("token", response.data.token);
  return response;
;}
