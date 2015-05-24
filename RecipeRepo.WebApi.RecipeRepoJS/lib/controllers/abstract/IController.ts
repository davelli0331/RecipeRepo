interface IController {
    getJson(json: any): Promise<any>;
	postJson(json: any): Promise<any>;
    putJson(json: any): Promise<any>;
    deleteJson(json: any): Promise<any>;
}