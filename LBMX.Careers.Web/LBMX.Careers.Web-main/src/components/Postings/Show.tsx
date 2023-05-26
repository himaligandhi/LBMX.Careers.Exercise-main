import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import {
  Posting,
  PostingsRouteParams,
  postingsRoutes,
  postingsService,
  utils,
} from '..';

export default function Show() {
  const [posting, setPosting] = useState<Posting>();
  const { id } = useParams<PostingsRouteParams>();
  const location = useLocation();
  const { formatDate } = utils;

  useEffect(() => {
    postingsService.getPosting(id, (posting) => {
      setPosting({ ...posting, closingDate: formatDate(posting?.closingDate) });
    });
  }, [formatDate, id]);

  return (
    <div>
      <h2>{posting?.title}</h2>

      <div id="edit-posting-link">
        <Link to={`${location.pathname}/edit`}>Edit</Link>
      </div>
      <div className="closing-date">Closing {posting?.closingDate}</div>
      <div className="blurb">{posting?.blurb}</div>
      <Link to={postingsRoutes.root.path}>Back</Link>
    </div>
  );
}
