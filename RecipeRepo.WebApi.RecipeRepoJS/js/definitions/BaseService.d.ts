/// <reference path="IService.d.ts" />
declare class Service {
    getJson: Function;
    postJson: Function;
    putJson: Function;
    deleteJson: Function;
    constructor(options: IService);
}
