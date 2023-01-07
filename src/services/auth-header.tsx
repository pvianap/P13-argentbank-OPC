export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const token = user.token;
  console.log('Token: ', token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return headers;
}
