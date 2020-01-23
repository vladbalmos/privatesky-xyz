import DefaultFormController from "../DefaultFormController.js";

export default class TestFormChildrenController extends DefaultFormController {
    constructor(element) {
        super(element, {
            sectionTitle: {
                label: "Your personal information"
            },
            name: {
                label: "Name",
                name: "name",
                required: true,
                placeholder: "Name here...",
                value: ''
            },
            subSection: {
                title: {
                    label: "Personal information from sub-tree of a model"
                },
                otherInformation: {
                    email: {
                        label: "Email address",
                        name: "email",
                        required: true,
                        placeholder: "Email address here...",
                        value: ''
                    },
                    otherLabels: [{
                        label: "Zero Label",
                        subLabel: {
                            label: "Zero sub-label"
                        }
                    }, {
                        label: "One Label"
                    }, {
                        label: "Two Label"
                    }]
                }
            }
        });

        this._element.addEventListener('my-submit', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            /**
             * Custom implementation here...
             */
        }, true);
    }
}