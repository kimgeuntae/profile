import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Made");
    }

    async getHtml() {
        return `
            <h1>Welcome</h1>
            <p>
                Made</a>.
            </p>
        `;
    }
}