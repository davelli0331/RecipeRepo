var Views;
(function (Views) {
    var BaseView = (function () {
        function BaseView(options) {
            this.Template = options.template;
            this.RootElement = options.rootHtmlElement;
            this.Model = options.model;
        }
        BaseView.prototype.Render = function () {
            var representation = this.Template(this.Model);
            this.RootElement.append(representation);
            return this.RootElement;
        };
        return BaseView;
    })();
    Views.BaseView = BaseView;
})(Views || (Views = {}));
