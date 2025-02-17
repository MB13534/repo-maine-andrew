import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1) Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // for STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 2) Send email to YOU (the business)
    await transporter.sendMail({
      from: `"RepoMaine Contact Form" <${process.env.SMTP_EMAIL}>`,
      replyTo: `${data.name} <${data.email}>`,
      to: process.env.SMTP_EMAIL,
      subject: "ONLINE FORM SUBMISSION",
      html: `
        <h2>New Repossession Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Asset Type:</strong> ${data.assetType}</p>
        <p><strong>Last Known Location:</strong> ${data.assetLocation}</p>
        <p><strong>Additional Info:</strong> ${data.additionalInfo || "N/A"}</p>
      `,
    });

    // 3) Send a CONFIRMATION email to the USER
    await transporter.sendMail({
      from: `"RepoMaine" <${process.env.SMTP_EMAIL}>`,
      to: data.email,
      subject: "We Received Your Repossession Request",
      html: `
        <h2>Thank you, ${data.name}!</h2>
        <p>
          We appreciate you contacting RepoMaine. One of our representatives 
          will review your request and get back to you as soon as possible.
        </p>
        <p><strong>Here’s a copy of your submission:</strong></p>
        <ul>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Asset Type:</strong> ${data.assetType}</li>
          <li><strong>Last Known Location:</strong> ${data.assetLocation}</li>
          <li><strong>Additional Info:</strong> ${data.additionalInfo || "N/A"}</li>
        </ul>
        <p>If you have any additional details or questions, feel free to reply 
           directly to this email.</p>
        <p>– The RepoMaine Team</p>
      `,
    });

    // Return success
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
