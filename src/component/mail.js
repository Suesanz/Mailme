// import express from 'express'
const express=require("express")
const nodemailer=require("nodemailer")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.post('/send', (r, s) => {
    // const {email = '', name = '', message = '', subject = ''} = r.body
    const name = r.body.name
    const email = r.body.email
    const message = r.body.message
    const subject=r.body.subject
    const content= `<strong>A new request from Contact section</strong><p> </p>
    \n Name: ${name} \n Email: ${email} \n Subject:${subject} \n Message: ${message} `
    let transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 587,
        // secure: true, // true for 465, false for other ports
        service: 'gmail',
        auth: {
            user: 'anthe2067@gmail.com', // generated ethereal user
            pass: '24suesanz07' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Loreum ipsum" <anthe2067@gmail.com>', // sender address
        to: 'yadavsourav24071998@gmail.com', // list of receivers
        subject: 'Contact', // Subject line
        text: content, // plain text body
        // html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // s.render('index', {msg: "Email sent"})
    });
})

const PORT = process.env.PORT || 4000;
app.listen(PORT)