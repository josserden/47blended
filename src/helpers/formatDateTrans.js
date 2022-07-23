import { format } from 'date-fns';

export function formatDateTrans(date) {
  return format(new Date(date), 'MM/dd/yyyy hh:mm:ss', { addSuffix: true });
}
