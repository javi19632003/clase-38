import { createTransport } from 'nodemailer';
const testmail = 'javi19632003@gmail.com';


const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'camilla.gleichner@ethereal.email',
        pass: 'G5uW8tEjyyK6ZEpKY8'
    }
});

const mimail = {
    from : 'camilla.gleichner@ethereal.email',
    to: testmail,
    subject: 'prueba de este mail',
    html: '<h1> ALTA DE USUARIO </h1>'
}

const mando = await transporter.sendMail(mimail);
console.log(mando)
