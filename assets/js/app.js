const payBtn = document.getElementById('pay-btn');
const name = document.getElementById('merchant-name');
const amount = document.getElementById('merchant-amount');

payBtn.addEventListener('click', () => {
    
    if ((document.location.href.indexOf('localhost') === -1) || (document.location.href.indexOf('127.0.0.1') === -1)) {
        // Development
        url = 'paymentsuccess.html?name=' + name.value + '&amount=' + amount.value;
    } else {
        // Production
        url = '/paymentsuccess.html?name=' + name.value + '&amount=' + amount.value;
    }
    document.location.href = url;
});