describe("Base Collection ",() => {
    describe("Get ",() => {
        var controller: mockController,
            collection: Collections.BaseCollection<any>;

        beforeEach((done) => {
            controller = new mockController({
                getOptions: {
                    getShouldReturn: [{
                        Title: "Test Title"
                    }]
                }
            });

            collection = new Collections.BaseCollection<any>(controller);
            collection.Get({
                Success: () => {
                    done();
                }
            });
        });

        it("succeeds",() => {
            var item = collection.ItemAt(0);

            expect(collection.Count()).toBe(1);
            expect(item.Title).toBe("Test Title");
        });
    });

    describe("collection inspection and selection ",() => {
        var controller: mockController,
            collection: Collections.BaseCollection<any>;

        beforeEach((done) => {
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

            collection = new Collections.BaseCollection<any>(controller);
            collection.Get({
                Success: () => {
                    done();
                }
            });
        });

        describe("Any ", function () {
            it("any() returns true if the list contains items but no predicate or properties are specified",() => {
                var shouldBeTrue = collection.Any();

                expect(shouldBeTrue).toBe(true);
            });

            it("any() returns true an item matches a predicate",() => {
                var shouldBeTrue = collection.Any((item) => { return item.Title === "Another Title" });

                expect(shouldBeTrue).toBe(true);
            });

            it("any() returns false if no item matches",() => {
                var shouldBeTrue = collection.Any((item) => { return item.Title === "David" });

                expect(shouldBeTrue).toBe(false);
            });
        });

        describe("Where ", function () {
            it("returns an array of matching items for single item", function () {
                var matches = collection.Where((item) => { return item.Title === "Another Title"; });

                expect(matches.length).toBe(1);
                expect(matches[0].Title).toBe("Another Title");
            });

            it("returns an array of matching items for multiple items", function () {
                var matches = collection.Where((item) => { return _.string.include(item.Title, "Test"); });

                expect(matches.length).toBe(2);
            });

            it("returns an empty array if null passed in", function () {
                var matches = collection.Where(null);

                expect(matches.length).toBe(0);
            });

            it("returns an empty array if no matching items found", function () {
                var matches = collection.Where((item) => { return item.Title === "alkdsjf" });

                expect(matches.length).toBe(0);
            });
        });
    });
});