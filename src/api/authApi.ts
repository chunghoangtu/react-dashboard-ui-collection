import axios from 'axios';

export type AuthDataType = {
  email: string;
  password: string;
}

export const loginApi = (data: AuthDataType) => axios.post('/auth/login', data);