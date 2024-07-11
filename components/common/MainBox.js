export class MainBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="components/common/MainBox.css">
            <div class="main-box">
                <div class="main-box-header"></div>
            </div>
        `;
    }
}

customElements.define('common-main-box', MainBox);
