import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Posting, postingsService, postingsRoutes } from '..';

function List() {
  const [postings, setPostings] = useState<Posting[]>([]);

  useEffect(() => {
    postingsService.getPostings((postings) => setPostings(postings));
  }, []);

  return (
    <div>
      <h2>Postings</h2>

      <div id="new-posting-link">
        <Link to={postingsRoutes.new.path}>New Posting</Link>
      </div>

      <div className="div-table">
        <div className="div-row header">
          <div className="div-cell">Job ID</div>
          <div className="div-cell">Blurb</div>
        </div>
        {postings.map(({ _id, blurb, postingId }) => (
          <div key={_id} className="div-row">
            <div className="div-cell">
              <Link to={`${postingsRoutes.root?.path}/${_id}`}>
                {postingId}
              </Link>
            </div>
            <div className="div-cell">{blurb}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
