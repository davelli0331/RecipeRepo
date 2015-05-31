declare class mockController implements Controllers.IController {
    private options;
    constructor(options?: {
        postOptions?: {
            postShouldFail?: boolean;
        };
        getOptions?: {
            getShouldReturn?: any;
            getShouldFail?: boolean;
        };
    });
    postJson(json: any): Promise<{}>;
    getJson(options?: any): Promise<any>;
    putJson(json: any): Promise<{}>;
    deleteJson(json: any): Promise<{}>;
}
