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
            <div class="card">
                <h5 class="card-header">psk-files-chooser</h5>
                <div class="card-body">
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-files-chooser /&gt;</span>
                        </code>
                    </pre>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Description</h5>
                        </div>
                        <div class="card-body">
                            <p>This component allows the user to select multiple files from his device to load them into the application providing him a customizable way to do this.</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Supported properties</h5>
                        </div>
                        <div class="card-body">
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>label: <b>string</b> <i>(optional)</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>Default value: <code><i>Select files</i></code></p>
                                    <p>This is the lable of the button.</p>
                                </div>
                            </div>
                            <div class="card border-light mt-4">
                                <div class="card-header">
                                    <h5 class="card-title"><code>accept: <b>string</b> <i>(optional)</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This property tells the component which types of files can be uploaded from the user's device.</p>
                                    <p>If this property is missing, then all types of files can be uploaded.</p>
                                </div>
                            </div>
                            <div class="card border-light mt-4">
                                <div class="card-header">
                                    <h5 class="card-title"><code>onFilesSelect / onFilesChange: <b>Function</b> <i>(optional)</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This property tells the component what to do with the uploaded files.</p>
                                    <p>If this property is missing, then nothing will happen with the uploaded files.</p>
                                    <p>A hint message will be displayed for the user, to know that a controller for the component is not set.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>HTML Children</h5>
                        </div>
                        <div class="card-body">
                            <p>This component has no HTML children.</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Usage Example</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-4">
                                <psk-files-chooser
                                    label="Select files"
                                    onFilesSelect={this.filesHandler.bind(this)}
                                />
                            </div>
                            <p>See below the selected files using <psk-link page="psk components / attachments list">Attachments List</psk-link> component.</p>
                            <psk-attachments-list files={this.fileList} removeFileFromList={this.removeFileFromList.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}