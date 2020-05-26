import moment from 'moment';

const dataParser = (date) => {
  if (moment(date).format('DD/MM/YYYY') === 'Invalid date') {
    return moment(date.toString().slice(0, 7)).format('MMM/YYYY');
  } else {
    return moment(date).format('DD/MM/YYYY');
  }
};

export default dataParser;
