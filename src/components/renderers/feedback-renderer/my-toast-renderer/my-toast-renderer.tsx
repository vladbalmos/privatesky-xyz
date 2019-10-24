import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core'
import {StyleCustomisation} from 'webcomponents/src/interfaces/StyleCustomisation'

@Component({
    tag: "my-toast-renderer",
    styleUrl: '../../../../assets/css/bootstrap/css/bootstrap.min.css',
    shadow: true
})

export class ToastComponent {
    @Prop({ reflectToAttr: true, mutable: true }) message: any
    @Prop({ reflectToAttr: true, mutable: true }) timeSinceCreation: number
    @Prop({ reflectToAttr: true, mutable: true }) timeMeasure: string = 'Right now';
    @Prop({ reflectToAttr: true, mutable: true }) styleCustomisation: StyleCustomisation
    @State() alert: any = null;
    @Event({
        eventName: 'closeFeedback',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) closeFeedback: EventEmitter

    renderPersonalToast(toast) {
        return (
            this.alert = (
                <div class="toast fade out show" style={!Object.keys(toast).length ? '' : ( toast.feedback ? (toast.feedback.style ? toast.feedback.style : '') : '') }>
                    <div class="toast-header" style ={!Object.keys(toast).length ? '' : (toast.header ? (toast.header.style ? toast.header.style : '') : '')}>
                        <strong class="mr-auto">{this.message.name ? this.message.name : ( !Object.keys(toast).length ? '' : (toast.header ? (toast.header.title ? toast.header.title : '') : ''))}</strong>
                        {(this.timeMeasure !== 'Right now') ? <small>{this.timeSinceCreation} {this.timeMeasure} </small> : <small>{this.timeMeasure} </small>}
                        <button
                            class="ml-2 mb-1 close"
                            title="Close"
                            onClick={() => {
                                this.closeFeedback.emit(this.message)
                            }}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="toast-body" style ={ !Object.keys(toast).length ? '' : (toast.body ? (toast.body.style ? toast.body.style : '') : '')}>
                    {this.message.content ? this.message.content : ( !Object.keys(toast).length ? '' : ( toast.body ? (toast.body.content ? toast.body.content : '') : ''))}{this.message.name ? this.message.name : (!Object.keys(toast).length ? '':( toast.header.title ? toast.header.title : ''))}
                    </div>
                </div>
            )
        )
    }
    render() {
        return this.styleCustomisation.toast ? this.renderPersonalToast(this.styleCustomisation.toast) : this.renderPersonalToast({}) 
    }
}