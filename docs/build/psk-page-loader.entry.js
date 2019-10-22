import { r as registerInstance, h } from './core-1b7fc012.js';

const PskPageLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.errorLoadingPage = false;
    }
    componentWillLoad() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.pageUrl);
        xhr.onload = () => {
            if (xhr.status != 200) {
                this.errorLoadingPage = true;
            }
            else {
                this.pageContent = xhr.responseText;
            }
        };
        xhr.onerror = () => {
            this.errorLoadingPage = true;
        };
        xhr.send();
    }
    render() {
        return (this.errorLoadingPage ?
            h("h4", null, `Page ${this.pageUrl} could not be loaded!`) :
            h("div", { class: "page_content", innerHTML: this.pageContent }));
    }
};

export { PskPageLoader as psk_page_loader };
