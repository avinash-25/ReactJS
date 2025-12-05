- When outer loop run once then after they wait st poll stage.
- because network controls, file system read are all happen at the poll stage.
- thread also goe outside to get some resourses.
- whenever will resourses get then nodejs starts streaming.
- so node js is called semi eleptical
- when timer phase will check then after another phase will chaeck before another phase inner phase will check in libuv.
-  UV_THREADPOOL_SIZE = 10; to increase number of threads. this is written in .env file

### Types of modules

1. Inbuild modules
2. user defiened modules
3. Third party modules.


## Express

- It is a framework
- we can easily connect database.

## Middleware

1. app.use()
   - use to handle Middleware
   - Handle all request GET, POST, PUT, PATCH, DELETE 
   - http:localhost:3000/api/user

2. app.all()
   - use to handle a route
   - Handle all request GET, POST, PUT, PATCH, DELETE 
   - if we write http:localhost:3000/api in all.all(http:localhost:3000/api, ()=>{});
   - http:localhost:3000/api/user is not valid.
   - only /api is valid, It means it is only for route specific

### Types of Middleware

1. User defined Middleware
   - Gllobal Middleware
   - Route Middleware
   - Error Middleware
  
2. Built in Middleware
   - express.json()
   - express.urlencoded()
   - express.static()

3. Third party Middleware
   - cors
   - csruf
   - multer
   - passport
   - cookie-parser
   - express-session
   - jwt