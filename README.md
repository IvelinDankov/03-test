### User Authentication and Authorization WorkShop

#### Developing steps 
    1. Init new project.
    2. Install eslint.
    3. Install needed packages.
        - nodemon.
        - express.
        - bcrypt.
        - cookie-parser.
        - jsonwebtoken.
    4. Make server with express.
    5. Make html for home, register and login.
    6. Try to make all this requests.
    7. Show all views put all html in get requests to be displayed on the browser.
    8. Import cookie parser and add to express
    9. import bcrypt.
    10. take res.body and then take pass and try to hash with bcrypt.
    11. Before to generate hash, I need to generate salt.
    12. Import bcrypt and generate salt. 
    13. Hash password with salt. (mix function). /hash (password, salt)/.
    14. After hash need to save password. Where can we save it? Maybe in one object. 
    15. Save password in one Dictionary Object
    16. Go to login make post request and take username and password. 
    17. Check if user is registered.
    18. Now compare with bcrypt this password (witch is hash) with cur. user wrote pass. Use bcrypt.compare 
    19. If is valid user write text Welcome user.
##### JWT - Json Web Token.
    - Generate JWT 
    1. Make new Profile page. 
    2. In profile page must to see Authenticated user is user authenticated or not?
    3. Return back to register and create a token on successful authentication. 
    4. Import jwt bibliotheca. 
    5. Take token from jwt and use sign fun. 
    6. He accept.
        - payload
        - secret
        - {expired: '2h'};
    7. JWT bind with cookie. /res.cookie('auth', token)/
    8. redirect now to profile page.
    9. Take token to auth user. 
    10. JWTtoken will be equal to req.cookie['auth']
    11. if don't have JWTtoken res.status(401).
    12. now verify user with jwt.verify().
    13.