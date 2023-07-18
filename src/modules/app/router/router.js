import { createRouter } from '@lwrjs/router/default';
import { LightningElement } from 'lwc';

export default class AppRouter extends LightningElement {
	router = createRouter();
}
