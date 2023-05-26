import { Home } from './';

const routes = (mountPoint: string) => ({
  home: { path: `${mountPoint}`, name: 'Home', component: Home },
});

export default routes;
