import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    service: "gmail", // Use 'service' instead of 'host' for predefined services like Gmail
    port: 465,        // Port for secure connections
    secure: true,     // true for port 465, false for other ports
    auth: {
        user: "infoSamarpan2025@gmail.com", // Your Gmail address
        pass: "irkd ywnt yevq khio",        // App password (keep it secure!)
    },
});

async function sendMail(to, subject, text) {
    const mailOptions = {
        from: "infoSamarpan2025@gmail.com", // Sender's email address
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error("Error while sending email:", err);
        } else {
            console.log(`Email sent successfully To - ${mailOptions.to} `);
        }
    });
}

export default sendMail;