import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BaseForm, PerForm, postingsRoutes, postingsService } from '..';
import schema, { toFormValues, fromFormValues } from './schema';

export default function New() {
  const [posting, setPosting] = useState<BaseForm>(toFormValues());
  const history = useHistory();

  function handleCancel() {
    history.push(postingsRoutes.root.path);
  }

  function handleFormChanges(field: string, value: any) {
    setPosting((currentPosting) => ({ ...currentPosting, [field]: value }));
  }

  function handleSubmit() {
    postingsService.createPosting(fromFormValues(posting), () =>
      history.push(postingsRoutes.root.path)
    );
  }

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
