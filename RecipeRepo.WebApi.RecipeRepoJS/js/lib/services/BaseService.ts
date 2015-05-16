/// <reference path="IService.ts" />
class Service {
	getJson: Function;
	postJson: Function;
	putJson: Function;
	deleteJson: Function;
	
	constructor(options: IService) {
		this.getJson = options.getJson;
		this.postJson = options.postJson;
		this.putJson = options.putJson;
		this.deleteJson = options.deleteJson;
	}
}