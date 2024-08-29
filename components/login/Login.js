export class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/components/login/Login.css">
      <div class="container">
        <div class="form-container sign-up-container">
            <form id="signUpForm">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><img src="/components/icon/man_11407998.png"></a> 
                </div>
                <span>Create your admin account here</span>
                <input type="text" id="signUpName" placeholder="Name" />
                <input type="email" id="signUpEmail" placeholder="Email" />
                <input type="password" id="signUpPassword" placeholder="Password" />
                <input type="password" id="signUpConfirmPassword" placeholder="Confirm Password" />
                <input type="password" id="signUpAdminPin" placeholder="Admin pin number" />
                <button type="submit">Sign Up</button>
                <p>You have to know your Admin pin before create this account</p>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form id="signInForm">
                <h1>Sign In</h1>
                <div class="social-container">
                    <a href="#" class="social"><img src="/components/icon/security_10458979.png"></a>
                </div>
                <span>Only administrators can access this</span>
                <input type="email" id="signInEmail" placeholder="Email" />
                <input type="password" id="signInPassword" placeholder="Password" />
                <a href="#"><p class="href">Forgot your password?</p></a><br>
                <button type="submit">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Aboard!</h1>
                    <p>"Set Up Your Admin Profile and Empower Your New Role."</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Admin!</h1>
                    <p>"Secure Access, Effortless Management—Start Your Admin Journey Today."</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
      </div>
    `;

    // Event listeners for Sign In and Sign Up buttons
    this.shadowRoot.getElementById('signIn').addEventListener('click', () => {
      this.shadowRoot.querySelector('.container').classList.remove("right-panel-active");
    });

    this.shadowRoot.getElementById('signUp').addEventListener('click', () => {
      this.shadowRoot.querySelector('.container').classList.add("right-panel-active");
    });

    // Add event listeners for form submissions
    this.shadowRoot.getElementById('signUpForm').addEventListener('submit', this.validateSignUpForm.bind(this));
    this.shadowRoot.getElementById('signInForm').addEventListener('submit', this.validateSignInForm.bind(this));
  }

  validateSignUpForm(event) {
    event.preventDefault();
    const name = this.shadowRoot.getElementById('signUpName').value;
    const email = this.shadowRoot.getElementById('signUpEmail').value;
    const password = this.shadowRoot.getElementById('signUpPassword').value;
    const confirmPassword = this.shadowRoot.getElementById('signUpConfirmPassword').value;
    const adminPin = this.shadowRoot.getElementById('signUpAdminPin').value;

    let isValid = true;

    if (!name) {
      alert('Name is required');
      isValid = false;
    }
    if (!email || !this.validateEmail(email)) {
      alert('Valid email is required');
      isValid = false;
    }
    if (!password) {
      alert('Password is required');
      isValid = false;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      isValid = false;
    }
    if (!adminPin) {
      alert('Admin pin number is required');
      isValid = false;
    }

    if (isValid) {
      // Form is valid, proceed with submission or further processing
      alert('Sign Up Form is valid');
    }
  }

  validateSignInForm(event) {
    event.preventDefault();
    const email = this.shadowRoot.getElementById('signInEmail').value;
    const password = this.shadowRoot.getElementById('signInPassword').value;

    let isValid = true;

    if (!email || !this.validateEmail(email)) {
      alert('Valid email is required');
      isValid = false;
    }
    if (!password) {
      alert('Password is required');
      isValid = false;
    }

    if (isValid) {
      // Form is valid, proceed with submission or further processing
      alert('Sign In Form is valid');
    }
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}

customElements.define("my-login", Login);
