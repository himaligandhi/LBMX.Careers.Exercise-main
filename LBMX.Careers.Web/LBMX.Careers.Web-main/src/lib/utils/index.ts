import dayjs from 'dayjs';

// date utils
enum DateFormats {
  STANDARD,
}

const formats = ['YYYY-MM-DD'];

export function formatDate(dateString: string, format = DateFormats.STANDARD) {
  return dayjs(dateString).format(formats[format]);
}
