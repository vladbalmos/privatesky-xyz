import { r as registerInstance, h } from './core-1b7fc012.js';

const basePath = "https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/src/pages/";
const PskImg = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "image_container" }, h("div", { class: "image_wrapper" }, h("img", { src: basePath + this.src, class: "img-fluid", alt: this.title })), this.title ? h("div", { class: "image_description" }, this.title) : null));
    }
};

export { PskImg as psk_img };
