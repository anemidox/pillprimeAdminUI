export class Statistic extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class="statistic">
                <h2 class="statistic-title">Statistic Title</h2>
                <p class="statistic-description">Statistic Description</p>
                <button class="statistic-button">Save</button>
            </div>     
    `;}
}

customElements.define('my-statistic', Statistic);