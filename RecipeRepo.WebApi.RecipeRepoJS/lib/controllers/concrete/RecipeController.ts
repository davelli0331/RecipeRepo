module Controllers {
    export class RecipeController implements IController {
        getJson(options?: any) {
            options = options || {};

            return new Promise((resolve, reject) => {
                var request = new XMLHttpRequest();
                request.open('GET', '/api/Recipe', true);

                request.onload = () => {
                    if (request.status === 200) {
                        resolve(request.response);
                    }

                    reject(request.response);
                };

                request.onerror = () => {
                    reject("Network error");
                };

                request.send();
            });
        }

        postJson(json: any) {
            return new Promise((resolve, reject) => { });
        }

        putJson(json: any) {
            return new Promise((resolve, reject) => { });
        }

        deleteJson(json: any) {
            return new Promise((resolve, reject) => { });
        }
    }
}