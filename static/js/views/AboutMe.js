import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("AboutMe");
    }

    async getHtml() {
        return `
            <h1>About Me</h1>
            <p>
                hello
            </p>
        `;
    }
}