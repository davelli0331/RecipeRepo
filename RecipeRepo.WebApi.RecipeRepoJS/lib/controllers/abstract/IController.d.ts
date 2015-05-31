declare module Controllers {
    interface IController {
        getJson(options?: any): Promise<any>;
        postJson(json: any): Promise<any>;
        putJson(json: any): Promise<any>;
        deleteJson(json: any): Promise<any>;
    }
}
