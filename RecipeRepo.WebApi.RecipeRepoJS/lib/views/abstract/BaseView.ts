module Views {
    export class BaseView {
        Template: (context: any) => string;
        RootElement: JQuery;
        Model: any;

        constructor(options: {
            template: (context: any) => string;
            rootHtmlElement: JQuery;
            model?: any
        }) {
            this.Template = options.template;
            this.RootElement = options.rootHtmlElement;
            this.Model = options.model;
        }

        Render() {
            var representation = this.Template(this.Model);
            this.RootElement.append(representation);

            return this.RootElement;
        }
    }
}