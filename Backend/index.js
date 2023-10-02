var express = require('express')
var app = express();
var multer = require('multer');
const ftp = require('ftp');

const client = new ftp();

const ftpConfig = {
  host: 'localhost',
  port: 5000,
  user: 'starc',
  password: 'rutik',
};


client.on('ready', () => {
  // You can perform FTP operations here
  console.log('Connected to FTP server');
  // For example, you can list directories or upload/download files
});

client.on('error', (err) => {
  console.error('FTP error:', err);
});

client.connect(ftpConfig);

app.listen(5000, () => {
    console.log("Server run")
});

