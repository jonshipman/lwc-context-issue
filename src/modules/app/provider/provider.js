import { AppContext, AppProvider } from 'app/context';
import { LightningElement } from 'lwc';

export default class AppProviderComponent extends LightningElement {
	debug = 1;
	click = 1;

	get data() {
		return {
			debug: this.debug,
			click: this.click,
			incrementClick: this.incrementClick.bind(this)
		};
	}

	incrementClick() {
		this.click++;

		AppContext.setContext(this, this.data);
	}

	connectedCallback() {
		AppProvider(this, this.data);

		setInterval(() => {
			this.debug++;

			AppContext.setContext(this, this.data);
		}, 1000);
	}
}
