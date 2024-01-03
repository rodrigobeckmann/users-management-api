export const getToken = () => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === 'token') {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

export const setToken = (token) => {
  document.cookie = `token=${encodeURIComponent(token)}`;
};