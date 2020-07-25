import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

const formatDate = (date: Date, formatString: string = 'dd/MM/yyyy'): string =>
  format(new Date(date), formatString, { locale: pt })

export default formatDate;
