import cookies from 'js-cookie';

interface AuthHeaders {
  [headers: string]: string;
}

export const wrapWithAuthHeaders = (headers: AuthHeaders) => {
  const authHeaders: any = {};
  const token: string | undefined = cookies.get('token');
  if (token) {
    authHeaders.Authorization = `Bearer ${cookies.get('token')}`;
  }

  return { ...headers, ...authHeaders };
};
