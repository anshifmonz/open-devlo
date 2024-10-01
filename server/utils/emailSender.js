import nodemailer from 'nodemailer'

const gmail = process.env.EMAIL;
const password = process.env.EMAIL_PASSWD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: gmail,
    pass: password
  }
})

async function emailSender(to, subject, text) {
  try {
    await transporter.sendMail({
      from: gmail,
      to: to,
      subject: subject,
      text: text
    })
  } catch (err) {
    throw new Error('Server error');
  }
}

export default emailSender;
