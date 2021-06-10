const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const userConnectionEmails = async (req,res) => {

    const {name, company, email, phone, message} = req.body

    // Email to user
    const connectWithUser = {
        to: email,
        from: 'spencertsablan@gmail.com',
        subject: `Thank you for connecting, ${name}!`,
        html: '<h1>It is great to meet you!</h1><p>You are the best</p>'
    }

    // Email to admin
    const notifyAdmin = {
        to: 'spencertsablan@gmail.com',
        from: 'spencertsablan@gmail.com',
        subject: 'A new user has requested to connnect',
        html: `<ul><li>Name: ${name}</li>
                <li>Company: ${company}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li>
                <li>Message: ${message}</li>
                </ul>`
    }

    // Send emails
    try {
        await sgMail.send(connectWithUser)
        await sgMail.send(notifyAdmin)
        res.status(200).send()
    }
    catch (e) {
        res.status(400).send(e)

        console.log(e.message)
    }



}

module.exports = { userConnectionEmails }