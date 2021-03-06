describe("Base Model ",() => {

    describe("constructor ",() => {
        it("sets isNew to true", function () {
            var model = new Models.BaseModel(new mockController());

            expect(model.IsNew).toBeTruthy();
        });

        it("sets isDirty to true",() => {
            var model = new Models.BaseModel(new mockController());

            expect(model.IsDirty).toBeTruthy();
        });
    });

    describe("save ",() => {
        var model: Models.BaseModel;

        describe("succeeds ",() => {
            beforeEach((done: () => void) => {
                model = new Models.BaseModel(new mockController({
                    postOptions: {
                        postShouldFail: false
                    }
                }));
                model.Save({
                    onSuccess: function () {
                        done();
                    }
                });
            });

            it("sets isNew to false",() => {
                expect(model.IsNew).toBeFalsy();
            });

            it("sets isDirty to false",() => {
                expect(model.IsDirty).toBeFalsy();
            });
        });

        describe("fails ",() => {
            beforeEach((done: () => void) => {
                model = new Models.BaseModel(new mockController({
                    postOptions: {
                        postShouldFail: true
                    }
                }));

                model.Save({
                    onFailure: function () {
                        done();
                    }
                });
            });

            it("isNew remains true",() => {
                expect(model.IsNew).toBeTruthy();
            });

            it("isDirty remains true",() => {
                expect(model.IsDirty).toBeTruthy();
            });
        });
    });
});