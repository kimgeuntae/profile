import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Skill");
    }

    async getHtml() {
        return `
            <h1>Welcome</h1>
            <p>
                Skill</a>.
            </p>
        `;
    }
}