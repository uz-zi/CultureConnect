const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, verificationCode) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "f201114@cfd.nu.edu.pk",
            pass: 'vloo cvlm jbqk hwhk'
    }
    });

    await transporter.sendMail({
        from: '"CultureConnect.pk" <f201114@cfd.nu.edu.pk>',
        to: email,
        subject: 'Your Verification Code from CultureConnect',
        text: `Your verification code is: ${verificationCode}`
    });
};

module.exports = { sendVerificationEmail };