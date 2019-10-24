import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core'
import {StyleCustomisation} from 'webcomponents/src/interfaces/StyleCustomisation'
@Component({
    tag: "my-alert-renderer",
    styleUrls: ['../../../../assets/css/bootstrap/css/bootstrap.min.css','./my-alert-renderer.css'],
    shadow: true
})

export class AlertComponent {
    @Prop({ reflectToAttr: true, mutable: true }) typeOfAlert: string = "alert-success"
    @Prop({ reflectToAttr: true, mutable: true }) message: any
    @Prop({ reflectToAttr: true, mutable: true }) timeAlive: any;
    @Prop({ reflectToAttr: true, mutable: true }) styleCustomisation : StyleCustomisation
    @State() alert: any = null;
    @State() isVisible:boolean = true;
    @Event({
        eventName: 'closeFeedback',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) closeFeedback: EventEmitter

    closeUIFeedback(){
        this.isVisible = false;
        setTimeout(()=>{
         this.closeFeedback.emit(this.message)
        },1000);
    }
    renderPersonalToast(alert) {
        return (
        this.alert = (
            <div class={`alert ${this.typeOfAlert} alert-dismissible fade ${this.isVisible?'show':'hide'}`} style={!Object.keys(alert).length ? '' : (alert.style ? alert.style : '')} onClick={() => {
               this.closeUIFeedback()
            }}>
                <slot />
                <div class="alert-body">
                    { this.message.content ? this.message.content : !Object.keys(alert).length ? '' :( alert.content ? alert.content : '') }{ this.message.content ? this.message.content : !Object.keys(alert).length ? '' :( alert.content ? alert.content : '') }
                </div>
            </div>
        )
        
        )

    }
        render() {
            setTimeout(() => {
                this.closeUIFeedback()
            }, this.timeAlive)
            return this.styleCustomisation.alert ? this.renderPersonalToast(this.styleCustomisation.alert) : this.renderPersonalToast({})
        }
} 
