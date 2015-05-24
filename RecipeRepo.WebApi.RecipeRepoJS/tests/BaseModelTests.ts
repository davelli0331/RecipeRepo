describe("Base Model ", function () {

	it("is a test", function () {
		expect('foo').toBe('bar');
	});
	describe("constructor ", () => {
		it("sets isNew to true", function () {
			var model = new BaseModel(new mockController());

			expect(model.IsNew).toBeTruthy();
		});

		it("sets isDirty to true", () => {
			var model = new BaseModel(new mockController());

			expect(model.IsDirty).toBeTruthy();
		});
	});

	describe("save ",() => {
		it("sets isNew to false",() => {
			var model = new BaseModel(new mockController());
			model.Save();

			expect(model.IsNew).toBeFalsy();
		});
	});
});