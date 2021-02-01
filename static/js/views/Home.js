import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("KIM GEUNTAE");
    }

    async getHtml() {
        return `
            <h1>Welcome</h1>
            <p>
                Home</a>.
            </p>
        `;
    }
}