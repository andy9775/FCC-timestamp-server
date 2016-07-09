var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function buildResponse(unixDate, naturalDate) {
  var date = new Date(naturalDate || (unixDate * 1000));
  if (date == 'Invalid Date') {
    return {
      unix: null,
      natural: null
    };
  }

  var result = {
    unix: date.getTime() / 1000,
    natural: months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
  };

  return result;
}

module.exports = buildResponse;
