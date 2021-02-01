import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Education");
    }

    async getHtml() {
        return `
            <h1>Welcome</h1>
            <p>
                Education</a>.
            </p>
        `;
    }
}