describe("Base View ", function () {
    describe("constructor ", function () {
        var html;
        beforeEach(function () {
            html = "<div>{{Test}}</div>";
        });
        it('instantiates properly', function () {
            var baseView = new Views.BaseView({
                template: Handlebars.compile(html),
                rootHtmlElement: $("<div></div>")
            });
            expect(baseView.RootElement).toBeDefined();
        });
    });
    describe("Render function ", function () {
        var html;
        beforeEach(function () {
            html = "<span>{{Title}}</span>";
        });
        it("renders the given model", function () {
            var baseView = new Views.BaseView({
                template: Handlebars.compile(html),
                rootHtmlElement: $("<div></div>"),
                model: {
                    Title: "This is a test"
                }
            });
            var rendered = baseView.Render();
            expect(rendered.prop('outerHTML')).toBe("<div><span>This is a test</span></div>");
        });
    });
});
