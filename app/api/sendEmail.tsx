import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Destructure the request body
    const { name, email, message } = req.body;

    // Ensure environment variables are strings
    const emailUsername = process.env.EMAIL_USERNAME;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (
      typeof emailUsername !== "string" ||
      typeof emailPassword !== "string"
    ) {
      return res.status(500).json({ status: "Email credentials are not set" });
    }

    // Set up nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: "YourEmailServiceProvider",
      auth: {
        user: emailUsername,
        pass: emailPassword,
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: "yourEmail@example.com",
      subject: `New message from ${name}`,
      text: message,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ status: "Email sent" });
    } catch (error: any) {
      return res
        .status(500)
        .json({ status: "Email not sent", error: error.toString() });
    }
  } else {
    // Handle any non-POST methods
    res.status(405).end();
  }
}
