export class Setting extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class="setting">
                <h2 class="setting-title">Setting Title</h2>
                <p class="setting-description">Setting Description</p>
                <button class="setting-button">Save</button>
            </div>     
    `;}
}

customElements.define('my-setting', Setting);