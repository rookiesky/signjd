const https = require('https');

https.get('https://api.telegram.org/bot1061752256:AAGMGGWKf3vheZYvoXid7ApqSMS__P5_zNs/sendMessage?chat_id=399125830&text=1234',(resp) => {
	console.log(resp)
}).on('error', (err) => {
	console.log('Error:' + err.message)
});