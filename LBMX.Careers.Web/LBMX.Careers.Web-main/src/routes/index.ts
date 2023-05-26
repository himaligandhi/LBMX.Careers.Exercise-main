import configureCommonRoutes from './common';
import configurePostingsRoutes from './postings';

// make components available to the route configurations
export { Home } from '../components/Home';
export * as Postings from '../components/Postings';

// configure urls
const appRoot = '/';
const commonRoutes = configureCommonRoutes(appRoot);
const postingsRoutes = configurePostingsRoutes(`${appRoot}postings`);

// configured routes
export { commonRoutes, postingsRoutes };

// interfaces
export type { PostingsRouteParams } from './postings';
