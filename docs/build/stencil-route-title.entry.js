import { r as registerInstance, c as getElement } from './core-210175f2.js';
import { A as ActiveRouter } from './active-router-879c60fa.js';

const RouteTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titleSuffix = '';
        this.pageTitle = '';
    }
    updateDocumentTitle() {
        const el = this.el;
        if (el.ownerDocument) {
            el.ownerDocument.title = `${this.pageTitle}${this.titleSuffix || ''}`;
        }
    }
    componentWillLoad() {
        this.updateDocumentTitle();
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "pageTitle": ["updateDocumentTitle"]
    }; }
};
ActiveRouter.injectProps(RouteTitle, [
    'titleSuffix',
]);

export { RouteTitle as stencil_route_title };
