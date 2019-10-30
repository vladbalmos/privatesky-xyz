import { Component, h, State } from "@stencil/core";
import { WgFile } from "webcomponents/dist/types/interfaces/WgFile";

@Component({
    tag: 'files-chooser-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class AttachmentListUsage {

    @State() fileList: WgFile[];

    filesHandler(files) {
        this.fileList = files;
    }

    removeFileFromList = (index: number): void => {
        let tempFileList = [...this.fileList];
        tempFileList.splice(index, 1);
        this.fileList = [...tempFileList];
    }

    render() {
        return (
            <psk-list>
                1A hint message will be displayed for the user, to know that a controller for the component is not set.
                1A hint message will be displayed for the user, to know that a controller for the component is not set.
                1A hint message will be displayed for the user, to know that a controller for the component is not set.
                1A hint message will be displayed for the user, to know that a controller for the component is not set.
                <p>This property tells the component what to do with the uploaded files.</p>
                2A hint message will be displayed for the user, to know that a controller for the component is not set.
                2A hint message will be displayed for the user, to know that a controller for the component is not set.
                2A hint message will be displayed for the user, to know that a controller for the component is not set.
                2A hint message will be displayed for the user, to know that a controller for the component is not set.
                <p>If this property is missing, then nothing will happen with the uploaded files.</p>
                4A hint message will be displayed for the user, to know that a controller for the component is not set.
               4 A hint message will be displayed for the user, to know that a controller for the component is not set.
               4 A hint message will be displayed for the user, to know that a controller for the component is not set.
               4 A hint message will be displayed for the user, to know that a controller for the component is not set.
            </psk-list>
        );
    }
}