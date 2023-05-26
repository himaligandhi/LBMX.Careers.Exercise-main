export interface BaseForm {
  [key: string]: any;
}

export type Form<T> = {
  [key in keyof T]: any;
};

export type Validation<T> = {
  test(form: Form<T>): boolean;
  message: string;
};

export type Field<T> = {
  type: string;
  label: string;
  defaultValue: any;
  options?: { label: string; value: any }[];
  validations?: Validation<T>[];
  [key: string]: any;
};

export type SchemaDefinition<T> = {
  [key in keyof Partial<T>]: Field<T>;
};

export function defaults(
  schema: SchemaDefinition<any>,
  overrides: BaseForm = {}
): BaseForm {
  return Object.entries(schema).reduce((defaultValues, [key, field]) => {
    const value = overrides.hasOwnProperty(key)
      ? overrides[key]
      : field.defaultValue;
    return { ...defaultValues, [key]: value };
  }, {});
}

export { default as PerForm } from './Form';
