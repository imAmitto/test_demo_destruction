const moment = require('moment');

const momentValue = {
  dateString: moment().format('DD/MM/YYYY'),
  dateYearMonthDay: moment().format('YYYY-MM-DD'),
  year: moment().format('YYYY'),
  monthDayYear: moment().format('MMM D, YYYY'),
  monthYear: moment().format('MMM YYYY'),
  monthDateDay: moment().format('MMM DD,dddd'),
  dateLocal_ll: moment().format('ll'),
  dateLocal_l: moment().format('l'),
  weekStartDate: moment()
    .startOf('isoWeek')
    .format('MMM DD'),
  weekEndDate: moment()
    .endOf('isoWeek')
    .format('MMM DD'),
  weekStartDateFrom: moment()
    .startOf('isoWeek')
    .format('MMM DD, YYYY'),
  weekEndDateTo: moment()
    .endOf('isoWeek')
    .format('MMM DD, YYYY'),
  weekStart: moment()
    .startOf('isoWeek')
    .format('MMM D, YYYY'),
  weekEnd: moment()
    .endOf('isoWeek')
    .format('MMM D, YYYY'),
  weekStartFrom: moment()
    .startOf('isoWeek')
    .format('MMM DD'),
  weekEndTo: moment()
    .endOf('isoWeek')
    .format('MMM DD'),
  singleDigitDate: moment().format('D'),
  monthNumber: moment().format('MM'),
  dayNumber: moment().format('d'),
  currentMonth: moment().format('MMM'),
  previousMonthYear: moment()
    .subtract(1, 'months')
    .format('MMM YYYY'),
  previousYearMonthDay: moment()
    .subtract(1, 'year')
    .format('YYYY-MM-DD'),
  nextMonthYear: moment()
    .add(1, 'months')
    .format('MMM YYYY'),
  previousWeekStartDate: moment()
    .subtract(1, 'weeks')
    .startOf('isoWeek')
    .format('MMM DD'),
  previousWeekEndDate: moment()
    .subtract(1, 'weeks')
    .endOf('isoWeek')
    .format('MMM DD'),
  previousMonthStartDate: moment()
    .subtract(1, 'months')
    .startOf('month')
    .format('MMM DD'),
  previousMonthEndDate: moment()
    .subtract(1, 'months')
    .endOf('month')
    .format('MMM DD'),
  thisMonthStartDate: moment()
    .startOf('month')
    .format('MMM DD'),
  thisMonthEndDate: moment()
    .endOf('month')
    .format('MMM DD'),
  thisYearStartDate: moment()
    .startOf('year')
    .format('MMM DD'),
  thisYearEndDate: moment()
    .endOf('year')
    .format('MMM DD'),
  month: moment().format('MMM'),
  doubleDigitDate: moment().format('DD'),
  day: moment().format('dddd'),
  yearEndDate: moment()
    .endOf('month')
    .format('MMMM DD, YYYY'),
  previousDayMonthDateYear: moment()
    .subtract(1, 'days')
    .format('dddd, MMMM D, YYYY'),
  previousDate: moment()
    .subtract(1, 'days')
    .format('D'),
  yearStartMonthDayYear: moment()
    .startOf('year')
    .format('MMM DD,YYYY'),
  yearEndMonthDayYear: moment()
    .endOf('year')
    .format('MMM DD,YYYY'),
  daysFromToday(date, days) {
    return date.add(days, 'd');
  },
  convertInvoiceDateToMoment(date) {
    return moment(date, 'MMM DD YYYY');
  },
  convertDateToInvoiceFormat(date) {
    date = date.format('ll');
    let splitDate = date.split(' ');
    if (splitDate[1].length == 2)
      date = splitDate[0] + ' 0' + splitDate[1] + ' ' + splitDate[2];
    return date;
  },
  fullMonth: moment().format('MMMM'),
  previousFullMonth: moment()
    .subtract(1, 'months')
    .format('MMMM'),
};
module.exports = momentValue;
