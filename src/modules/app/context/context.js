import { generateContextWireAdapter } from 'app/contextGenerate';
import { ContextInfo } from 'app/contextInfo';
import { createContextProvider } from 'lwc';

const APP_CONTEXT = new ContextInfo({ debug: 0, click: 0 });

export class AppContext extends generateContextWireAdapter(APP_CONTEXT) {}

const contextualizer = createContextProvider(AppContext);

export function AppProvider(providerNode, contextValue) {
	AppContext.setContext(providerNode, contextValue);

	contextualizer(providerNode, {
		consumerConnectedCallback: AppContext.subscribeContext.bind(
			AppContext,
			providerNode
		),

		consumerDisconnectedCallback: AppContext.unsubscribeContext.bind(
			AppContext,
			providerNode
		),
	});
}

export { ContextInfo, generateContextWireAdapter };
