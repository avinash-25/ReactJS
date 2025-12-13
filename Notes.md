## Express-session

- creates obect and send to the route handler function(controller). Control goes to req object.

re.cookie and cookie both are different

If we write cookie inside app.use it means cookie present for sometime not deleted when wesite closed app.use()

### resave

If user access the website without credentials and we want to save the session of that then we use resave:false. if we use true then their data will save to the server database.

### saveUninitialized

If user visit once at any ecomm website and add 3 products and if they visit again then their fairst data will be saved or not.

### secret
    adding just for the streak










