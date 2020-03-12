import BindableController from "./base-controllers/BindableController.js";

const model = {
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
};

export default class TestFormChildrenController extends BindableController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
    }
}
