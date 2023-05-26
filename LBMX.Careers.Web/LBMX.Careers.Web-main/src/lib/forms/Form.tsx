import React, { ChangeEvent, useState } from 'react';
import { BaseForm, Field, SchemaDefinition } from '.';

interface IForm {
  schema: SchemaDefinition<any>;
  value: BaseForm;
  onCancel: () => void;
  onChange: (field: string, value: any) => void;
  onSubmit: () => void;
}

export default function Form({
  schema,
  value,
  onCancel,
  onChange,
  onSubmit,
}: IForm) {
  const [entries] = useState(Object.entries(schema));

  function handleCancel(e: React.FormEvent) {
    e.preventDefault();
    onCancel();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.id, e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit();
  }

  function getElement(
    field: string,
    fieldConfig: Field<any>,
    value: any
  ): React.ReactElement {
    const { type } = fieldConfig;

    const props = {
      id: field,
      value,
      onChange: handleChange,
    };

    switch (type) {
      case 'textarea':
        return React.createElement(type, { ...props, rows: 4 });
      case 'select':
        return React.createElement(
          type,
          { ...props },
          fieldConfig.options?.map(({ label, value }, index) => {
            return React.createElement('option', { key: index, value }, label);
          })
        );
      default:
        return React.createElement('input', { ...props, type });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {entries.map(([field, fieldConfig]) => (
        <div key={field} className="field">
          <label htmlFor={field}>{fieldConfig.label}</label>
          {getElement(field, fieldConfig, value[field])}
        </div>
      ))}
      <div className="form-controls">
        <button>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}
