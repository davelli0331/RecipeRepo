declare module Views {
    class BaseView {
        Template: (context: any) => string;
        RootElement: JQuery;
        Model: any;
        constructor(options: {
            template: (context: any) => string;
            rootHtmlElement: JQuery;
            model?: any;
        });
        Render(): JQuery;
    }
}
