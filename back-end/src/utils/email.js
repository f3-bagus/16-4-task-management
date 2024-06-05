import nodemailer from 'nodemailer';
const { MAILTRAP_HOST, MAILTRAP_PORT, MAILTRAP_USER, MAILTRAP_PASSWORD } =
  process.env;

const transporter = nodemailer.createTransport({
  host: MAILTRAP_HOST,
  port: MAILTRAP_PORT,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASSWORD,
  },
});

export const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: MAILTRAP_USER,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};
