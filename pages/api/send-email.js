// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import Rollbar from "rollbar";

var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_POST_SERVER_ITEM_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // generated ethereal user
    pass: process.env.SMTP_PASS, // generated ethereal password
  },
});

export default async function sendEmailAPI(req, res) {
  if (req.method === 'POST') {
    // send mail with defined transport object
    const { name, email, message } = req.body;
    try {
      let info = await transporter.sendMail({
        from: 'My Portfolio Website', // sender address
        to: "bogdan.d1995@gmail.com", // list of receivers
        subject: "New Message from My Portfolio Website", // Subject line
        html: `<p>Name: ${name}</p>
            <p>E-mail: ${email}</p>
            <p>Message: ${message}</p>`,
      });
      console.log('process.env.ROLLBAR_POST_SERVER_ITEM_TOKEN: ', process.env.ROLLBAR_POST_SERVER_ITEM_TOKEN);
      rollbar.info('Email sent successfully: ', req);
      res.status(200).json({ type: 'success' });
    } catch (e) {
      rollbar.error(e, req);
      res.status(200).json({ type: 'error' });
    }
  }
}
