import { LitElement, html, repeat } from "@lion/core";
import {LionListbox, LionOption, LionOptions} from "@lion/listbox";

customElements.define('lion-listbox', LionListbox);
customElements.define('lion-option', LionOption);
customElements.define('lion-options', LionOptions);

export class MyBug extends LitElement {
	constructor() {
		super();
		this.options = ['option 1','option 2'];
	}
	
	clearOptions() {
		this.options = [];
		this.requestUpdate();
	}
	
	addOption() {
		this.options.push('option ' + Date.now());
		this.requestUpdate();
	}
	
	render() {
		return html`
			<button @click="${this.clearOptions}">clear</button>
			<button @click="${this.addOption}">add</button>
			<h1>plain map:</h1>
			${this.options.map(option => html`
			<div>${option}</div>
			`)}
			<h1>listbox with map:</h1>
			<lion-listbox>
				${this.options.map(option => html`
					<lion-option>${option}</lion-option>
				`)}
			</lion-listbox>
			<h1>listbox with repeat:</h1>
			<lion-listbox>
				${repeat(this.options, option => option, option => html`
					<lion-option>${option}</lion-option>
				`)}
			</lion-listbox>
			<h1>listbox with lion-options (working workaround):</h1>
			<lion-listbox>
				<lion-options slot="input">
					${repeat(this.options, option => option, option => html`
						<lion-option>${option}</lion-option>
					`)}
				</lion-options>
			</lion-listbox>
	`;
	}
}

customElements.define("my-bug", MyBug);
