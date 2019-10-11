import { r as registerInstance, d as createEvent, h } from './core-210175f2.js';
import { C as CustomTheme } from './CustomTheme-6b7a6f39.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AppMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuItems = null;
        this.hamburgerMaxWidth = 600;
        this.showHamburgerMenu = false;
        this.showNavBar = false;
        this.menuItemClicked = createEvent(this, "menuEvent", 7);
        this.needMenuItemsEvt = createEvent(this, "needMenuItems", 7);
    }
    checkIfHamburgerIsNeeded() {
        this.showHamburgerMenu = document.documentElement.clientWidth < this.hamburgerMaxWidth;
    }
    componentDidLoad() {
        this.checkIfHamburgerIsNeeded();
    }
    handleClick(ev) {
        ev.preventDefault();
        let item = ev.target.value;
        for (let i = 0; i < this.menuItems.length; i++) {
            this.menuItems[i].active = item === this.menuItems[i];
        }
        this.menuItemClicked.emit(ev.target.value);
        //forcing a rerendering
        this.menuItems = [...this.menuItems];
    }
    toggleNavBar() {
        this.showNavBar = !this.showNavBar;
    }
    componentWillLoad() {
        if (!this.menuItems) {
            this.needMenuItemsEvt.emit((data) => {
                this.menuItems = data;
            });
        }
    }
    renderItem(menuItem) {
        let ItemRendererTag = this.itemRenderer ? this.itemRenderer : "psk-menu-item-renderer";
        let children = [];
        if (menuItem.children) {
            for (let i = 0; i < menuItem.children.length; i++) {
                children.push(this.renderItem(menuItem.children[i]));
            }
        }
        return h(ItemRendererTag, { onclick: (event) => this.handleClick(event), active: menuItem.active ? menuItem.active : false, children: children, hamburger: this.showHamburgerMenu, value: menuItem });
    }
    render() {
        let renderComponent = [];
        for (let i = 0; i < this.menuItems.length; i++) {
            let menuItem = this.menuItems[i];
            renderComponent.push(this.renderItem(menuItem));
        }
        let activeItem = this.menuItems.find((item) => {
            return item.active;
        });
        if (this.showHamburgerMenu) {
            renderComponent = renderComponent.map((item) => {
                return h("li", { onClick: this.toggleNavBar.bind(this), class: "nav-item" }, item);
            });
            let navBarClass = "collapse navbar-collapse " + `${this.showNavBar == true ? 'show' : ''}`;
            return (h("nav", { class: "navbar navbar-dark " }, h("a", { class: "navbar-brand", href: "#" }, activeItem ? activeItem.name : "Home"), h("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", onClick: this.toggleNavBar.bind(this), "aria-label": "Toggle navigation" }, h("span", { class: "navbar-toggler-icon" })), h("div", { class: navBarClass }, h("ul", { class: "navbar-nav mr-auto" }, renderComponent))));
        }
        else {
            return renderComponent;
        }
    }
    static get style() { return ":host{\n  width: 100%;\n}\n\n.navbar {\npadding:.5rem 1rem .5rem 0;\n}\n\n.navbar-brand{\n  padding: 5px;\n}"; }
};
__decorate([
    CustomTheme()
], AppMenu.prototype, "itemRenderer", void 0);

export { AppMenu as app_menu };
