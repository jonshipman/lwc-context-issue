import { LightningElement, wire } from 'lwc';
import { AppContext } from 'app/context';

export default class ExampleContext extends LightningElement {
	@wire(AppContext) appContext = {};

	get debug() {
		return this.appContext.debug;
	}

	renderedCallback() {
		console.log('AppContext debug property', this.debug);
	}
}
