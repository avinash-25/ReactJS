# Nodemailer

- Name email and password send to the express server then it will save to the server then after a mail format ready by the nodemailer and there is a verification link with token(random numbers like crypto token) and it will save to the server also and then  send back to the user with expiary time.
- FullName, email, password, verified token, emailVerified(intially false it will be after user clicked), expireyTime(In how much time token will expire).
- when a normal user provide their detail(Name, email, password) then after email verification will be done and OTP based login will be done this is called two step verification. It will happen at the time of login.