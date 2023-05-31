import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? "");

  const msg = {
    to: email,
    from: "plavaniluzanky@kometaplavani.cz",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    template_id: "d-874de2c55ad944d890768e75b9b2969b",
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default handler;
