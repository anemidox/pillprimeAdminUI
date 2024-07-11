export class Data extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class="data">
                <h2 class="data-title">Data Title</h2>
                <p class="data-description">Data Description</p>
                <button class="data-button">Save</button>
            </div>
        `;
    }
}

customElements.define('my-data', Data);