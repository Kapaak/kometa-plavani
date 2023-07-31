import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { email, templateId } = req.body;

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? "");

  const msg = {
    to: email,
    // from: "pavel.zaplet25@gmail.com",
    from: "plavaniluzanky@kometaplavani.cz",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    template_id: templateId,
  };

  sgMail
    .send(msg)
    .then((val) => {
      console.log("Email sent");
      res.send({ val, email });
    })
    .catch((error) => {
      console.error(error);
      res.send({ error, email });
    });

  res.send({});
};

export default handler;
