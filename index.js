import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

const SECRET = 'thisismysecret'

const registerUser = {
    'velin': '$2b$10$R1DG5zyaq/Mh51prvj7NcuZKNFrneNvHTmC7sHcah2yBvm7C5Kp3S',
    'ivan': '$2b$10$lLZzeRVe8hxd.qVgFIplX.juqunyyB6T1LU6zHR6j9mDq3E/oIEt6'
}

app.use(express.urlencoded({extended:false}))

app.use(cookieParser())

///////////////////////////////
//////////////// HOME
//////////////////////////////

app.get("/", (req, res) => {
  res.send(
    `
    <header>
      <nav>
        <a href="/">HOME</a> <span>  </span>
        <a href="/register">REGISTER</a
        > <span>  </span>
        <a href="/login">LOGIN</a>
      </nav>
    </header>
    <hr />
    <h1>Welcome to Home Page</h1>
    <hr />
    <div class="container">
      <h2>Authentication and Authorization</h2>
      <p class="home-text">lorem25</p>
      <a href="/login" class="link">Login</a>
      <a href="/register" class="link">Register</a>
    </div>
    <hr />
    <footer>
      <p class="footer-text">&copy; All rights reserved</p>
    </footer>
    `
  );
});

///////////////////////////////
//////////////// REGISTER
//////////////////////////////

app.get("/register", (req, res) => {
  res.send(`
        <section class="register">
        <header>
          <nav>
            <a href="/">HOME</a><span></span> <a href="/login">LOGIN</a
            ><span> </span><a href="/register">REGISTER</a>
          </nav>
        </header>
        <h2 class="register-title">Register Page</h2>
        <hr />
        <fieldset>
          <legend>Register</legend>
          <form method="post">
            <div class="form-box">
              <label for="name">Name: </label>
              <input
                type="text"
                name="username"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
  
            <div class="form-box">
              <label for="password">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                required
              />
            </div>
            <div class="form-box">
              <label for="rePass">Re-Password: </label>
              <input
                type="password"
                name="rePass"
                id="rePass"
                placeholder="Repeat Password"
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </fieldset>
      </section>
        `);
});

app.post('/register', async(req, res) => {
    // take user data from form but not forget to 
   const {username, password, rePass} = req.body;

    //salt generate
    const salt = await bcrypt.genSalt(10);
    // make hash password
    const passHash = await bcrypt.hash(password, salt);
    console.log(passHash);
    
    
    // save password... 
    registerUser[username] = passHash;

   res.redirect('/login');
});

///////////////////////////////
//////////////// LOGIN
//////////////////////////////

app.get('/login', (req, res) => {
   res.send(`
    <section class="login">
     <header>
          <nav>
            <a href="/">HOME</a><span></span> <a href="/login">LOGIN</a
            ><span> </span><a href="/register">REGISTER</a>
          </nav>
        </header>
      <h2 class="login-title">Login Page</h2>
      <hr />
      <fieldset>
        <legend>Login</legend>
        <form method="post">
          <div class="form-box">
            <label for="name">Name: </label>
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div class="form-box">
            <label for="name">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </fieldset>
    </section>
    `)
});

app.post('/login', async(req, res) => {
    // 1. take username & pass
   const {username, password} = req.body;
    // 2. Check if user is registered. HOW?
    if (!registerUser[username]) {
        res.status(400).send('User not Exist');
    } else {
      const isValid = await bcrypt.compare(password, registerUser[username]);

      const payload = {
        username,
        admin: true
      }

      const jwtToken = jwt.sign(payload, SECRET, {expiresIn: '2h'});

      
      //   res.send(`Welcome ${username}`)
      
      if (isValid) {
          res.cookie('auth', jwtToken);
        return res.redirect('/profile')
      } else {
        res.send('INVALID PASSWORD')
      }
    }
});

///////////////////////////////
//////////////// PROFILE
//////////////////////////////
app.get('/profile', async(req, res) => {
//    000 Authenticated user
const jwtToken = await req.cookies['auth'];
if (!jwtToken) {
    res.status(401).send('<h1>Unauthorize</h1>')
}

try {
    const decodedToken = jwt.verify(jwtToken, SECRET);

    res.send(`

        <header>
      <nav>
        <a href="/">HOME</a> <span>  </span>
        <a href="/register">REGISTER</a
        > <span>  </span>
        <a href="/login">LOGIN</a>
      </nav>
    </header>
    <hr />
    <h1>Welcome ${decodedToken.username}</h1>
    <hr />
    <div class="container">
      <h2>You are in Your Profile</h2>
      <p class="home-text">Some Text here...</p>
      <a href="/login" class="link">Login</a>
      <a href="/register" class="link">Register</a>
    </div>
    <hr />
    <footer>
      <p class="footer-text">&copy; All rights reserved</p>
    </footer> `)
    
} catch (error) {
    console.log(error.message);
    
}



// 001 Return User related data
});

app.listen(5000, () => console.log(`Server is listening on port 5000`));
