
# Backend

### Path : /signup
Method: POST<br>
Body:<br>

```
{name:"John", email:"john@example.com", password:"1234"}
```

#### Responses : <br>
Server Error : 500<br>
Success : 201

<hr/>

### Path : /login
Method: POST <br>
Body:<br>
```
{email:"john@example.com", password:"1234"}
```

#### Responses :<br>
Server Error : 500<br>
User Does Not Exist : 401<br>
Success : 201

<hr/>

#### Server side Validation using JOI Library.

<hr/>

#### Middleware to Interace JWT Token
header <br>
authorization : jwttoken<br>
/products GET
```
{
    {name:"mobile", price:"20000"}
    {name:"watch", price:"2000"}
}
```

<hr/>

# Frontend 
1. Routing
    - Private Routing
2. Login Page
    - Client side validation
    - Login a integration then store JWT Token
3. Sign Up Page
    - Client side validation
    - Sign Up API integration
4. Home Page 
    - Show logged in username
    - show logout button

<hr/>

NPM Packages
1. express - framework
2. jsonwebtoken  - JWT tokens
3. joi - managing server side validation
4. bcrypt - Encryption/Decryption of password
5. dotenv - managing environment variables
6. mongoose - managing database connection and database operation
7. cors - allowing other port request to the server
8. body-parser - allowing request body to the server
