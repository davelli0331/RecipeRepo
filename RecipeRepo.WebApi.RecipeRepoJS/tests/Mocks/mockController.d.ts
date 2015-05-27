declare class mockController implements IController {
    private options;
    constructor(options?: {
        postShouldFail?: boolean;
    });
    postJson(json: any): Promise<{}>;
    getJson(json: any): Promise<{}>;
    putJson(json: any): Promise<{}>;
    deleteJson(json: any): Promise<{}>;
}
