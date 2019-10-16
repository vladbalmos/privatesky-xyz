import { Component, h, State } from "@stencil/core";
import { WgFile } from "webcomponents/dist/types/interfaces/WgFile";

@Component({
    tag: 'attachment-list-usage',
    styleUrl: '../general-css/general-css.css',
    shadow: true,
})
export class AttachmentListUsage {
    @State() files1: WgFile[] = [
        {
            name: "File 1.xls",
            size: 121212121,
            type: "xls"
        },
        {
            name: "File 2.pdf",
            size: 12121222121,
            type: "pdf"
        },
        {
            name: "File 3.png",
            size: 12121,
            type: "png"
        }
    ];

    @State() files2: WgFile[] = [
        {
            name: "File 4.xls",
            size: 121212121,
            type: "xls"
        },
        {
            name: "File 5.pdf",
            size: 12121222121,
            type: "pdf"
        },
        {
            name: "File 6.png",
            size: 12121,
            type: "png"
        }
    ];

    removeFile(index) {
        let tempFileList = [...this.files2];
        tempFileList.splice(index, 1);
        this.files2 = [...tempFileList];
    }

    render() {
        return (
            <div class="card">
                <h5 class="card-header">psk-attachments-list</h5>
                <div class="card-body">
                    <h5>HTML Tag:</h5>
                    <pre class="text-center">
                        <code class="language-html" data-lang="html">
                            <span class="nt">&lt;psk-attachments-list /&gt;</span>
                        </code>
                    </pre>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Description</h5>
                        </div>
                        <div class="card-body">
                            <p>This component is intended to display a list of files with the possibility to download them.</p>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>Supported properties</h5>
                        </div>
                        <div class="card-body">
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>files: <b>array of WgFile types</b> <i>(WgFile[])</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>This parameter holds the files that can be downloaded. They can be downloaded one by one by clicking on the desired file, or all at the same time.</p>
                                    <p><i>Note: <code>WgFile</code> is a custom type. Inside it, the following information can be stored:</i>
                                        <ul>
                                            <li>name of the file</li>
                                            <li>size of the file</li>
                                            <li>type of the file (by extension)</li>
                                            <li><b><code>?</code></b> content of the file</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            
                            <div class="card border-light">
                                <div class="card-header">
                                    <h5 class="card-title"><code>removeFileFromList: <b>Function</b> <i>(optional)</i></code></h5>
                                </div>
                                <div class="card-body text-secondary">
                                    <p>If this property is given to the component, then a red X will be displayed on the right of each file card giving the possibility to remove the file <i>(this functionality should be implemented by the programmer providing him the possibility to have custom behavior before the deletion of the file).</i></p>
                                    <p>The function will receive one parameter, the <code>index</code> of the file in the <code>WgFile</code> array.</p>
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
                            <p>Attachments list without a remove property.</p>
                            <psk-attachments-list files={this.files1} />

                            <p class="mt-4">Attachments list component with a remove property.</p>
                            <psk-attachments-list
                                files={this.files2}
                                removeFileFromList={this.removeFile.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}