export class Home extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadow.innerHTML = `
            <h1>Home</h1>
        `;
    }
}

customElements.define('my-home', Home);