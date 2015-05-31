declare module Controllers {
    class RecipeController implements IController {
        getJson(options?: any): Promise<{}>;
        postJson(json: any): Promise<{}>;
        putJson(json: any): Promise<{}>;
        deleteJson(json: any): Promise<{}>;
    }
}
