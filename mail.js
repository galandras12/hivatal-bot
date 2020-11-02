const notifier = require('mail-notifier');
 
const imap = {
  user: 'galandras.mezobereny@gmail.com',
  password: 'tnwaaevhsrmboocs',
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  box: 'eAdat',
};
const n = notifier(imap);
n.on('end', () => n.start()) // session closed
  .on('mail', mail => console.log(mail.from[0].address, mail.subject))
  .start();