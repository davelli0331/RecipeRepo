describe("Base Collection ", function () {
    describe("Get ", function () {
        var controller;
        beforeEach(function (done) {
            controller = new mockController({
                getOptions: {
                    getShouldReturn: [{
                        Title: "Test Title"
                    }]
                }
            });
            controller.getJson().done(function () {
                done();
            });
        });
        it("succeeds", function () {
            var collection = new Collections.BaseCollection(controller);
            collection.Get();
            var item = collection.ItemAt(0);
            expect(collection.Count()).toBe(1);
            expect(item.Title).toBe("Test Title");
        });
    });
    describe("collection inspection and selection ", function () {
        var controller;
        beforeEach(function (done) {
            controller = new mockController({
                getOptions: {
                    getShouldReturn: [{
                        Title: "Test Title #1"
                    }, {
                        Title: "Test Title #2"
                    }, {
                        Title: "Another Title"
                    }, {
                        Title: "One More Title"
                    }]
                }
            });
            controller.getJson().done(function () {
                done();
            });
        });
        describe("Any ", function () {
            it("any() returns true if the list contains items but no predicate or properties are specified", function () {
                var collection = new Collections.BaseCollection(controller);
                collection.Get();
                var shouldBeTrue = collection.Any();
                expect(shouldBeTrue).toBe(true);
            });
            it("any() returns true an item matches a predicate", function () {
                var collection = new Collections.BaseCollection(controller);
                collection.Get();
                var shouldBeTrue = collection.Any(function (item) {
                    return item.Title === "Another Title";
                });
                expect(shouldBeTrue).toBe(true);
            });
            it("any() returns false if no item matches", function () {
                var collection = new Collections.BaseCollection(controller);
                collection.Get();
                var shouldBeTrue = collection.Any(function (item) {
                    return item.Title === "David";
                });
                expect(shouldBeTrue).toBe(false);
            });
        });
        describe("Where ", function () {
            it("returns an array of matching items for single item", function () {
                var collection = new Collections.BaseCollection(controller);
                collection.Get();
                var matches = collection.Where(function (item) {
                    return item.Title === "Another Title";
                });
                expect(matches.length).toBe(1);
                expect(matches[0].Title).toBe("Another Title");
            });
            it("returns an array of matching items for multiple items", function () {
                var collection = new Collections.BaseCollection(controller);
                collection.Get();
                var matches = collection.Where(function (item) {
                    return _.string.include(item.Title, "Test");
                });
                expect(matches.length).toBe(2);
            });
            it("returns an empty array if null passed in", function () {
                var collection = new Collections.BaseCollection(controller);
                collection.Get();
                var matches = collection.Where(null);
                expect(matches.length).toBe(0);
            });
            it("returns an empty array if no matching items found", function () {
                var collection = new Collections.BaseCollection(controller);
                collection.Get();
                var matches = collection.Where(function (item) {
                    return item.Title === "alkdsjf";
                });
                expect(matches.length).toBe(0);
            });
        });
    });
});
