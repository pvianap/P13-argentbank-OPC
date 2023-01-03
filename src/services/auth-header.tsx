export default function authHeader(): { [key: string]: string } {
  const user = JSON.parse(localStorage.getItem('user') as string) as {
    accessToken: string;
  };

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}
