import { BaseForm, defaults, Posting, SchemaDefinition, utils } from '..';

const schema: SchemaDefinition<Posting> = {
  jobCode: {
    type: 'select',
    label: 'Job Code',
    defaultValue: '',
    options: [
      { label: 'choose a job code', value: '' },
      { label: 'FS-JD', value: 'FS-JD' },
      { label: 'FS-SD', value: 'FS-SD' },
    ],
  },
  postingId: { type: 'text', label: 'Posting Id', defaultValue: '' },
  title: { type: 'text', label: 'Title', defaultValue: '' },
  blurb: { type: 'textarea', label: 'Blurb', defaultValue: '' },
  closingDate: { type: 'date', label: 'Closing Date', defaultValue: '' },
  languages: { type: 'text', label: 'Languages', defaultValue: '' },
  frameworks: { type: 'text', label: 'Frameworks', defaultValue: '' },
};

export function toFormValues(posting?: Posting): BaseForm {
  let formValues = {};

  if (posting !== undefined) {
    const { createdAt, updatedAt, __v, _id, ...rest } = posting;
    formValues = {
      ...rest,
      closingDate: utils.formatDate(rest?.closingDate),
      languages: rest?.languages.join(', '),
      frameworks: rest?.frameworks.join(', '),
    };
  }

  return defaults(schema, formValues);
}

export function fromFormValues(posting: BaseForm) {
  return {
    ...posting,
    languages: posting.languages.split(',').map((item: string) => item.trim()),
    frameworks: posting.frameworks
      .split(',')
      .map((item: string) => item.trim()),
  };
}

export default schema;
