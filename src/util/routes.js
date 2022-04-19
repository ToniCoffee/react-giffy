export const routes = {
  home: `${process.env.PUBLIC_URL}/`,
  login: `${process.env.PUBLIC_URL}/login`,
  register: `${process.env.PUBLIC_URL}/register`,
  search: `${process.env.PUBLIC_URL}/search/:keyword/:rating?`,
  gif: `${process.env.PUBLIC_URL}/gif/:id`,
  error: `${process.env.PUBLIC_URL}/:rest*`,
};