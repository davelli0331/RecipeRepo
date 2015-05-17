/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>


describe("Base Model ", function () {
	it("is new", function () {
		var model = new BaseModel();
		
		expect(model.isNew).toBe(true);
	});
});