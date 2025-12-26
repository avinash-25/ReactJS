import nodemailer from 'nodemailer';
import crypto from 'crypto';

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        password: process.env.EMAIL_PASS
    }
})

const token = crypto.randomBytes

const emailSend = async (from, to, subject, html) => {
    const template = {
        from: from,
        to: to,
        subject: subject,
        html: html
    }
    await transport.sendMail(template);
} 