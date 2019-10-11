import { r as registerInstance, d as createEvent, h } from './core-210175f2.js';

const PskAppRouter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuItems = [];
        this.needMenuItemsEvt = createEvent(this, "needMenuItems", 7);
    }
    componentWillLoad() {
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
                return h("stencil-route", { url: item.path, exact: item.exactMatch, component: item.component, componentProps: item.componentProps });
            }
        });
        return routes;
    }
    render() {
        let routes = this.renderItems(this.menuItems);
        return (h("div", { class: "app_container" }, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, routes))));
    }
};

export { PskAppRouter as psk_app_router };
