import { parse as parseDate, format } from 'date-fns';

const parse = (date, formatSchema) => parseDate(date, formatSchema, new Date());

const DATE_FORMAT = 'dd.MM.yyyy';

export const formatDate = (date) => {
  return format(date, DATE_FORMAT);
}

export const formatDateString = (date, formatSchema) => {
  const parsedDate = parse(date, formatSchema);
  return formatDate(parsedDate);
}
 