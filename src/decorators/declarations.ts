export interface TableOfContentClass {
    (opts?: TOCClassOptions);
}
export interface TOCClassOptions {
    className: string;
    description: string;
    componentTag: string;
}

export interface TableOfContentMethod {
    (opts?: TOCMethodOptions): MethodDecorator;
}
export interface TOCMethodOptions {
    methodName: string;
    description: string;
}

export interface TableOfContentProperty {
    (opts?: TOCPropertyOptions): PropertyDecorator;
}
export interface TOCPropertyOptions {
    propertyName: string;
    description?: string;
}

export interface TableOfContentParameter {
    (opts?: TOCParameterOptions): ParameterDecorator;
}
export interface TOCParameterOptions {
    parameterName: string;
    description: string;
}