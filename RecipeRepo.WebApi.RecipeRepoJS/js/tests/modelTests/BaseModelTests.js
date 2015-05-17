/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../RecipeRepo.js" />

var RecipeRepo = require("../../RecipeRepo.js");

describe("Base Model ", function () {
	it("is new", function () {
		var model = new BaseModel();
		
		expect(model.isNew).toBe(true);
	});
});