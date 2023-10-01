const formatDate = (date) => {
    //format date to YY.MM.DD

    //month to 2 digit num
    function formatMonth (str) {
        if (str.length < 2) {
            return "0" + str;
        } else {
            return str;
        }
    }
    let year = date.split(',')[0].split('/')[2].substring(2, 4);
    let month = formatMonth(date.split(',')[0].split('/')[0]);
    let day = date.split(',')[0].split('/')[1];
    return year + " · " + month + " · " + day;
}

export default formatDate;