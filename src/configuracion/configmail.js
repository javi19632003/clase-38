import { createTransport } from 'nodemailer';

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'camilla.gleichner@ethereal.email',
        pass: 'G5uW8tEjyyK6ZEpKY8'
    }
});

export  { transporter };
