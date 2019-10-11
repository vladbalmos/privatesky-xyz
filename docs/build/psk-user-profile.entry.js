import { r as registerInstance, d as createEvent, h } from './core-210175f2.js';

const PskUserProfile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.userInfo = null;
        this.getUserInfoEvent = createEvent(this, "getUserInfo", 7);
    }
    componentWillLoad() {
        if (!this.userInfo) {
            this.getUserInfoEvent.emit((err, userInfo) => {
                if (!err) {
                    this.userInfo = userInfo;
                }
                else {
                    console.error("Error getting user info", err);
                }
            });
        }
    }
    render() {
        let ItemRenderer = this.profileRenderer ? this.profileRenderer : "psk-user-profile-renderer";
        return (h(ItemRenderer, { userInfo: this.userInfo }));
    }
};

export { PskUserProfile as psk_user_profile };
