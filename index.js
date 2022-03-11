const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASWWORD
    }
  });

const createMailOption = (receiver) => ({
    from: process.env.EMAIL,
    to: receiver,
    subject: 'Sending Email with my script',
    text: 'Hey, this is from my script :p'
  });


['email@gmail.com'].map((receiver) => {
    const mailOption = createMailOption(receiver)
    return transporter.sendMail(mailOption, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})
  