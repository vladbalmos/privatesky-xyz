import * as d from './declarations';

export function TableOfContentClass(opts: d.TableOfContentClass) {
    console.log("Class options");
    console.log(opts);
    return function (args: ClassDecorator) {
        console.log("Class decorator");
        console.log(args);
    }
}

export function TableOfContentMethod(opts: d.TableOfContentMethod) {
    console.log("Method options");
    console.log(opts);
    return function (args: MethodDecorator) {
        console.log("Method decorator");
        console.log(args);
    }
}

export function TableOfContentProperty(opts: d.TOCPropertyOptions) {
    console.log("Property options");
    console.log(opts);
    return function (args: PropertyDecorator) {
        console.log("Property decorator");
        console.log(args);
    }
}

export function TableOfContentParameter(opts: d.TableOfContentParameter) {
    console.log("Parameter options");
    console.log(opts);
    return function (args: ParameterDecorator) {
        console.log("Parameter decorator");
        console.log(args);
    }
}