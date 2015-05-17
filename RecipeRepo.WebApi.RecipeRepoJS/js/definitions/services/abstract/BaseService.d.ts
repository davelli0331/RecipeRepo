/// <reference path="IService.d.ts" />
declare class Service implements IService {
    getJson: Function;
    postJson: Function;
    putJson: Function;
    deleteJson: Function;
    constructor(options: IService);
}
