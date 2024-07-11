import { MainBox } from "../common/MainBox.js";

export class Product extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class="product">
                <common-main-box></common-main-box>
            </div>
        `;

        this.shadowRoot.querySelector('.product-button').addEventListener('click', () => {
            this.addToCart();
        });
    }

    addToCart() {
        alert('Added to cart');
    }
}

customElements.define('my-product', Product);