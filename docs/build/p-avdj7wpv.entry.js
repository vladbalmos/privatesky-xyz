import{r as t,c as s,h as i}from"./p-94bfe925.js";const h=class{constructor(i){t(this,i),this.alertOpened=!1,this._messagesQueue=[],this._messagesContent=[],this.timer=0,this.opened=!1,this.messagesToDisplay=3,this.second=1e3,this.minute=60*this.second,this.hour=60*this.minute,this.openFeedbackHandler=s(this,"openFeedback",7),this.showFeedbackHandler=s(this,"showFeedback",7)}closeFeedbackHandler(t){this.alertOpened&&(this.alertOpened=!1);const s=this._messagesContent.indexOf(t.detail);s>-1&&(this._messagesContent.splice(s,1),this._messagesContent=this._messagesContent.slice(),this._messagesQueue.length>0&&(this._messagesContent=[...this._messagesContent,this._messagesQueue.shift()]))}componentWillLoad(){this.openFeedbackHandler.emit(t=>{this.alertOpened=!0,console.log(t),t instanceof Array?t.forEach(t=>{this.addToMessageArray.bind(this)(t)}):this.addToMessageArray.bind(this)(t)})}timerToShow(t){if(this._messagesContent.length>0){const s=(new Date).getTime(),i=t.timer;Math.floor((s-i)/this.second)<60?(this.timeMeasure="seconds",this.timer=Math.floor((s-i)/this.second),setTimeout(()=>{this.timerToShow.bind(this)(t)},500)):Math.floor((s-i)/this.minute)<60?(this.timer=Math.floor((s-i)/this.minute),this.timeMeasure="minutes",setTimeout(()=>{this.timerToShow.bind(this)(t)},4e4)):(this.timer=Math.floor((s-i)/this.hour),this.timeMeasure="hours",setTimeout(()=>{this.timerToShow.bind(this)(t)},3e6))}}addToMessageArray(t){const s={content:t,timer:(new Date).getTime()};this._messagesContent.length+1<=this.messagesToDisplay?this._messagesContent=[...this._messagesContent,s]:this._messagesQueue=[...this._messagesQueue,s]}showOneAlert(){this.opened=!0,this.showFeedbackHandler.emit("Example!")}showThreeAlerts(){this.opened=!0,this.showFeedbackHandler.emit(["SPIDERMAN!","BEST!","AVENGER!"])}render(){let t=[];return this._messagesContent.forEach(s=>{this.timerToShow.bind(this)(s),console.log(s),t.push(i("psk-ui-feedback",{opened:this.opened,message:s,"type-of-alert":"toast",timeSinceCreation:this.timer,timeMeasure:this.timeMeasure}))}),i("div",null,i("button",{onClick:this.showOneAlert.bind(this)},"Show One Alert!"),i("button",{onClick:this.showThreeAlerts.bind(this)},"Show Three Alerts!"),t||null)}};export{h as psk_list_feedbacks};