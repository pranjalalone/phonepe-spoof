window.onload = () => {
    const getDate = () => {
        let dateString = Date()
        let dateArray = dateString.split(' ');
        let date = dateArray[2]
        let month = dateArray[1]
        let year = dateArray[3]
        let rawTimeArray = dateArray[4].split(':');
        let time = (parseInt(rawTimeArray[0], 10) > 12) ? ("0" + (parseInt(rawTimeArray, 10) - 12) + ":" + rawTimeArray[1]) + " PM" : (rawTimeArray[0] + ":" + rawTimeArray[1] + " AM");
        let completeDate = time +  " on " + date + " " + month + " " + year;
        // console.log(completeDate);
        return completeDate;
    }

    let url = document.location.href;
    // console.log(url);
    let params = url.split('?')[1].split('&');
    // console.log(params);
    let data = {};
    params.forEach((param) => {
        info = param.split('=');
        if (info[1].indexOf('%20') != -1) {
            info[1] = info[1].replace('%20', ' ');
        }
        data[info[0]] = info[1];
    })
    // console.log(data);

    const name = document.getElementById('name');
    const amount = document.querySelector('#amount span');
    const bankAmt = document.querySelector('#bank-amt span');
    const dateTime = document.getElementById('date-time');
    name.innerHTML = data.name;
    amount.innerHTML = data.amount;
    bankAmt.innerHTML = data.amount;

    dateTime.innerHTML = getDate();
}