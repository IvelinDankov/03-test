### User Authentication and Authorization WorkShop

#### Developing steps 
    1. Init new project
    2. Install eslint
    3. Install needed packages.
        - nodemon.
        - express.
        - bcrypt.
        - cookie-parser.
        - jsonwebtoken
    4. Make server with express.
    5. Make html for home, register and login
    6. Try to make all this requests.
    7. Show all views put all html in get requests to be displayed on the browser.
    8. Import cookie parser and add to express
    9. import bcrypt
    10. take res.body and then take pass and try to hash with bcrypt.
    11. Before to generate hash, I need to generate salt.
    12. Import bcrypt and generate salt. 
    13. Hash password with salt. (mix function). /hash (password, salt)/.
    14. After hash need to save password. Where can we save it? Maybe in one object. 
    15. Save password in one Dictionary Object
    16. Go to login make post request and take username and password. 
    17. Check if user is registered.
    18. Now compare with bcrypt this password (witch is hash) with cur. user wrote pass. Use bcrypt.compare 