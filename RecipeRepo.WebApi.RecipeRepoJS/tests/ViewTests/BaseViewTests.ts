describe("Base View ",() => {
    describe("constructor ",() => {
        var html;

        beforeEach(() => {
            html = "<div>{{Test}}</div>";
        });

        it('instantiates properly',() => {
            var baseView = new Views.BaseView({
                template: Handlebars.compile(html),
                rootHtmlElement: $("<div></div>")
            });

            expect(baseView.RootElement).toBeDefined();
        });
    });

    describe("Render function ",() => {
        var html;

        beforeEach(() => {
            html = "<span>{{Title}}</span>";
        });

        it("renders the given model",() => {
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