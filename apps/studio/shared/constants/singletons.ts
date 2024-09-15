/**
 * Constant to store the actions available for singleton documents.
 */
const singletonsActions = new Set(['publish', 'discardChanges', 'restore']);

/**
 * Constant to store the name of the documents that are singletons.
 */
const singletonTypes = new Set(['settings', 'archives', 'contacts', 'about-us']);

export { singletonsActions, singletonTypes };
