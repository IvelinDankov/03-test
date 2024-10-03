import express from "express";

const app = express();

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
                name="name"
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
              name="name"
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

app.listen(5000, () => console.log(`Server is listening on port 5000`));
