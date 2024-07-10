export class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <button class="nav-item" id="home">Home</button>
        `;

        this.shadowRoot.querySelector('#home').addEventListener('click', () => {
            this.clickHandler();
        });
    }

    clickHandler() {
        alert('clicked');
    }
}

customElements.define('my-app', App);
