describe("Base Model ", function () {
	it("is new", function () {
		var model = new BaseModel();
		
		expect(model.isNew).toBeTrue();
	});
	
	it("is dirty is false", function () {
		var model = new BaseModel();
		
		expect(model.isDirty).toBeFalse();
	});
	
	it("toJson() returns empty object", function () {
		var model = new BaseModel();
		
		expect(model.toJson()).toBeEmptyObject();
	});
});

describe("Base model is new save ", function () {
	var postJson;
	
	beforeEach(function () {
		postJson = function () {
				var deferred = jQuery.Deferred();
				
				deferred.resolve({});				
				
				return deferred;
		};
	});
	
	it("resets isNew to false", function () {
		var model = new BaseModel({
			postJson: 	postJson
		});
		
		model.save();
		
		expect(model.isNew).toBeFalse();
	});
	
	it("resets isDirty to false", function () {
		var model = new BaseModel({
			postJson: 	postJson
		});
		model.isDirty = true;
		
		model.save();
		
		expect(model.isDirty).toBeFalse();
	});
});