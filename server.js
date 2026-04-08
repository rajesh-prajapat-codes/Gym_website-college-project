import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // your frontend
  credentials: true
}));

app.use(express.json());

// EMAIL ROUTE
app.post("/send/mail", async (req, res) => {
  try {
    const { name, email, phone, address, message } = req.body;

    // transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // mail content
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Message",
      html: `
  <h3>New Message</h3>
  <p><b>Name:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Phone:</b> ${phone}</p>
  <p><b>Address:</b> ${address}</p>
  <p><b>Message:</b> ${message}</p>
`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error sending message",
    });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});