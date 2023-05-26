import { Postings } from './';

export interface PostingsRouteParams {
  //id: string;
  postingId: string;
}

const routes = (mountPoint: string) => ({
  root: { path: `${mountPoint}`, name: 'Postings', component: Postings.List },
  new: {
    path: `${mountPoint}/new`,
    name: 'New Posting',
    component: Postings.New,
  },
  show: {
    path: `${mountPoint}/:postingId/`,
    name: 'Edit Posting',
    component: Postings.Show,
  },
  edit: {
    path: `${mountPoint}/:postingId/edit`,
    name: 'Edit Posting',
    component: Postings.Edit,
  },
});

export default routes;
