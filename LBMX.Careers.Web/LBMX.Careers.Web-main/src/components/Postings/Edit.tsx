import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
  BaseForm,
  PerForm,
  PostingsRouteParams,
  postingsRoutes,
  postingsService,
  utils,
} from '..';
import schema, { fromFormValues, toFormValues } from './schema';

export default function Edit() {
  const [posting, setPosting] = useState<BaseForm>(toFormValues());
  //const { id } = useParams<PostingsRouteParams>();
  const { postingId } = useParams<PostingsRouteParams>();
  const history = useHistory();
  const { formatDate } = utils;

  function handleCancel() {
    history.push(`${postingsRoutes.root.path}/${postingId}`);
  }

  function handleFormChanges(field: string, value: any) {
    setPosting((currentPosting) => ({ ...currentPosting, [field]: value }));
  }

  function handleSubmit() {
    postingsService.updatePosting(postingId, fromFormValues(posting));
  }

  useEffect(() => {
    postingsService.getPosting(postingId, (posting) => {
      setPosting(toFormValues(posting));
    });
  }, [formatDate, postingId]);

  return (
    <div>
      <PerForm
        schema={schema}
        value={posting}
        onCancel={handleCancel}
        onChange={handleFormChanges}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
