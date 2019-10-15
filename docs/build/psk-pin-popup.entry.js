import { r as registerInstance, d as createEvent, h } from './core-1b7fc012.js';

const PskPinPopup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.opened = false;
        this.pin = '';
        this.errorMessage = null;
        this.sendPin = createEvent(this, "sendPin", 7);
    }
    closePinPopup(evt) {
        evt.stopImmediatePropagation();
        this.opened = false;
    }
    sendPinHandler(evt) {
        evt.stopImmediatePropagation();
        this.sendPin.emit({
            pin: this.pin,
            callback: function (err) {
                if (!err) {
                    this.opened = false;
                    return;
                }
                this.errorMessage = err;
            }
        });
    }
    handlePinKeyUp(evt) {
        evt.stopImmediatePropagation();
        this.pin = evt.target.value;
    }
    render() {
        return (h("psk-modal", { opened: this.opened }, h("h3", { slot: "title" }, "Enter your PIN"), h("form", { class: "form-inline" }, h("div", { class: "form-group mx-sm-3 mb-2" }, h("label", { htmlFor: "pin", class: "sr-only" }, "PIN"), h("input", { name: "pin", type: "password", class: "form-control", id: "pin", placeholder: "PIN", onKeyUp: this.handlePinKeyUp.bind(this), value: this.pin }))), h("button", { slot: "confirm_action", class: "btn btn-success", disabled: this.pin.trim().length === 0, onClick: this.sendPinHandler.bind(this) }, "Send PIN")));
    }
    static get style() { return ""; }
};

export { PskPinPopup as psk_pin_popup };
