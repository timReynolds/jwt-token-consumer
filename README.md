NodeJS JWT Token Consumer
==================

Test client for consuming and validating JWT tokens. 

## Creating a certificate
Creating a certificate requires the use of openSSL as follows;

    openssl genrsa -out mykey.pem 1024
    openssl rsa -in mykey.pem -pubout > mykey.pub
