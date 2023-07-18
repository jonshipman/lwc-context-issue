import { LightningElement, wire } from 'lwc';
import { AppContext } from 'app/context';

export default class ExampleContext extends LightningElement {
	@wire(AppContext) appContext = {};

	get clickcount() {
		return this.appContext.click;
	}

	handleOnClick(event) {
		event.preventDefault();

		this.appContext.incrementClick();
	}
}
