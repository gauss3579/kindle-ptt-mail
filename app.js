var nodemailer = require('nodemailer');
var credentials = require('./credentials');

var mailTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: credentials.gmail.user,
        pass: credentials.gmail.pass
    }
});

var options = {
    //寄件者
    from: credentials.gmail.from,
    //收件者
    to: credentials.gmail.to,
    //to: 'gauss3579@gmail.com',
    //主旨
    subject: '', // Subject line
    //附件檔案
    html: '<p>HTML version of the message</p>',
    attachments: [{
        filename: 'test.txt',
        content: 'test'
    }]
};

//發送信件方法
mailTransport.sendMail(options, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('訊息發送: ' + info.response);
    }
});