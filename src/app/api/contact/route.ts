import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { capitalizeFirstLetter } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // for STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to business with inquiry details
    await transporter.sendMail({
      from: `"RepoMaine Contact Form" <${process.env.SMTP_EMAIL}>`,
      replyTo: `${data.name} <${data.email}>`,
      to: process.env.SMTP_EMAIL, // e.g. contact@repomaine.com
      subject: `Online Form Submission: ${capitalizeFirstLetter(data.inquiryType)}`,
      html: `
        <h2>Online Form Submission: ${capitalizeFirstLetter(data.inquiryType)}</h2>
        <p><strong>Inquiry Type:</strong> ${capitalizeFirstLetter(data.inquiryType)}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${
          data.inquiryType === "repossession"
            ? `<p><strong>Asset Type:</strong> ${data.assetType}</p>
               <p><strong>Last Known Location:</strong> ${data.assetLocation}</p>`
            : ""
        }
        <p><strong>Additional Info:</strong> ${data.additionalInfo || "N/A"}</p>
      `,
    });

    // Confirmation email to the user
    await transporter.sendMail({
      from: `"RepoMaine" <${process.env.SMTP_EMAIL}>`,
      to: data.email,
      subject: `Thank You for Your ${capitalizeFirstLetter(data.inquiryType)} Inquiry`,
      html: `
        <h2>Thank you, ${data.name}!</h2>
        <p>
          We have received your <strong>${data.inquiryType}</strong> inquiry.
          One of our representatives will get back to you shortly.
        </p>
        <h3>Your Submission:</h3>
        <ul>
          <li><strong>Inquiry Type:</strong> ${capitalizeFirstLetter(data.inquiryType)}</li>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          ${
            data.inquiryType === "repossession"
              ? `<li><strong>Asset Type:</strong> ${data.assetType}</li>
                 <li><strong>Last Known Location:</strong> ${data.assetLocation}</li>`
              : ""
          }
          <li><strong>Additional Info:</strong> ${data.additionalInfo || "N/A"}</li>
        </ul>
        <p>If you have any additional questions or details, feel free to reply directly to this email.</p>
        <p>– The RepoMaine Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
