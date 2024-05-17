import nodemailer from 'nodemailer';

const username = process.env.EMAIL_USERNAME;
const password = process.env.EMAIL_PASSWORD;

export async function createTransporter() {
    return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: username,
            pass: password
        }
    });
}
