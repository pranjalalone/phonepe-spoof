window.onload = () => {
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
    name.innerHTML = data.name;
    amount.innerHTML = data.amount;
    bankAmt.innerHTML = data.amount;
}