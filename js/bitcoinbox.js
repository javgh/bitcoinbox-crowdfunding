var FIREBASE_URL = 'https://bitcoinbox.firebaseio.com/';
var EXCHANGE_RATE = 295;

$(document).ready(function () {
    var db = new Firebase(FIREBASE_URL);

    db.on('value', function(snapshot) {
        percentage = snapshot.val().percentage;
        pledged = snapshot.val().pledged;
        pledged_usd = Math.round(pledged * EXCHANGE_RATE);
        backers = snapshot.val().backers;
        status_desc =  pledged + " BTC / " + pledged_usd + " USD; " +
                        backers + " backer";
        if (backers != 1) status_desc += "s";

        $('#status-percentage').width(percentage + '%');
        $('#status-desc').text(status_desc);
    });
})
