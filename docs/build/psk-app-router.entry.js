import { r as registerInstance, d as createEvent, h } from './core-1b7fc012.js';

const PskAppRouter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuItems = [];
        this.failRedirectTo = "";
        this.needMenuItemsEvt = createEvent(this, "needMenuItems", 7);
    }
    componentDidLoad() {
        this.needMenuItemsEvt.emit((data) => {
            this.menuItems = data;
        });
    }
    renderItems(items) {
        let routes = items.map((item) => {
            if (item.children) {
                return this.renderItems(item.children);
            }
            else {
                return h("stencil-route", { url: item.path, exact: item.exact, component: item.component, componentProps: item.componentProps });
            }
        });
        return routes;
    }
    render() {
        let routes = this.renderItems(this.menuItems);
        if (routes.length === 0) {
            return h("psk-ui-loader", { shouldBeRendered: true });
        }
        return (h("div", { class: "app_container" }, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, routes, h("stencil-route", { component: "psk-page-not-found", componentProps: { urlDestination: this.menuItems[0].path, } })))));
    }
};

export { PskAppRouter as psk_app_router };
