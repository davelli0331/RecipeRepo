describe("Base Model ", function () {
    describe("constructor ", function () {
        it("sets isNew to true", function () {
            var model = new BaseModel(new mockController());
            expect(model.IsNew).toBeTruthy();
        });
        it("sets isDirty to true", function () {
            var model = new BaseModel(new mockController());
            expect(model.IsDirty).toBeTruthy();
        });
    });
    describe("save ", function () {
        var model;
        describe("succeeds ", function () {
            beforeEach(function (done) {
                model = new BaseModel(new mockController({
                    postShouldFail: false
                }));
                model.Save({
                    onSuccess: function () {
                        done();
                    }
                });
            });
            it("sets isNew to false", function () {
                expect(model.IsNew).toBeFalsy();
            });
            it("sets isDirty to false", function () {
                expect(model.IsDirty).toBeFalsy();
            });
        });
        describe("fails ", function () {
            beforeEach(function (done) {
                model = new BaseModel(new mockController({
                    postShouldFail: true
                }));
                model.Save({
                    onFailure: function () {
                        done();
                    }
                });
            });
            it("isNew remains true", function () {
                expect(model.IsNew).toBeTruthy();
            });
            it("isDirty remains true", function () {
                expect(model.IsDirty).toBeTruthy();
            });
        });
    });
});
