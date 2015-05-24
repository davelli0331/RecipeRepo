declare class mockController implements IController {
    postJson(json: any): Promise<{}>;
    getJson(json: any): Promise<{}>;
    putJson(json: any): Promise<{}>;
    deleteJson(json: any): Promise<{}>;
}
