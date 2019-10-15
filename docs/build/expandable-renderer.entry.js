import { r as registerInstance, c as getElement, h } from './core-1b7fc012.js';

const ExpandableRenderer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isOpened = false;
        this.dropDownHasChildActive = false;
        this.somethingChanged = false;
    }
    handleClick(e) {
        const target = e.target;
        if (!getElement(this).contains(target)) {
            this.isOpened = false;
        }
    }
    routeChanged() {
        this.dropDownHasChildActive = window.location.href.includes(this.url);
    }
    toggleDropdown(evt) {
        let target = evt.target;
        let isChild = false;
        while (target.parentElement) {
            target = target.parentElement;
            if (target.classList.contains("children")) {
                isChild = true;
                break;
            }
        }
        if (!isChild) {
            evt.stopImmediatePropagation();
        }
        this.isOpened = !this.isOpened;
    }
    render() {
        this.routeChanged();
        return (h("div", { class: `dropdown ${this.dropDownHasChildActive ? "active" : ''} ${this.isOpened ? "isOpened" : ''}`, onClick: (evt) => this.toggleDropdown(evt) }, h("slot", null)));
    }
};

export { ExpandableRenderer as expandable_renderer };
