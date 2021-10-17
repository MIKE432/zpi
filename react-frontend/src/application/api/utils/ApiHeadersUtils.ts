import cookies from 'js-cookie';
import { TOKEN } from '../user/UserLogin';

interface AuthHeaders {
  [headers: string]: string;
}

export const wrapWithAuthHeaders = (headers: AuthHeaders) => {
  const authHeaders: any = {};
  const token: string | undefined = cookies.get(TOKEN);
  if (token) {
    authHeaders.Authorization = `Bearer ${cookies.get(TOKEN)}`;
  }

  return { ...headers, ...authHeaders };
};
