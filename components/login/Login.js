export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class="login">
                <h2 class="login-title">Login</h2>
                <input class="login-input" type="text" placeholder="Username">
                <input class="login-input" type="password" placeholder="Password">
                <button class="login-button">Login</button>
            </div>
        `;

        this.shadowRoot.querySelector('.login-button').addEventListener('click', () => {
            this.login();
        });
    }
}

customElements.define('my-login', Login);