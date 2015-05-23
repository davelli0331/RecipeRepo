/// <reference path="../../../scripts/typings/jasmine-matchers/jasmine-matchers.d.ts" />
/// <reference path="../../lib/models/abstract/basemodel.ts" />
/// <reference path="../../lib/services/abstract/iservice.ts" />
/// <reference path="../../../scripts/typings/jasmine/jasmine.d.ts" />

class mockService implements IService {
	getJson() { }
	postJson() { }
	putJson() { }
	deleteJson() { }
}

describe("Base Model ", function () {
	
	it("is new", function () {
		var model = new BaseModel(new mockService());
		
		expect(model.IsNew).toBeTruthy();
	});
	
	it("is dirty is false", function () {
		var model = new BaseModel(new mockService());
		
		expect(model.IsDirty).toBeFalsy();
	});
	
});