/// <reference path="../../../_references.ts" />
class BaseModel {
	private controller: IService;
	private isDirty: boolean;
	private isNew: boolean;
	
	constructor(controller: IService){
		this.controller = controller;
		
		this.isDirty = true;
		this.isNew = true;
	}
}