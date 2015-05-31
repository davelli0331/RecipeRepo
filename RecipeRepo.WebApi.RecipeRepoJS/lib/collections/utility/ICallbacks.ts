module Utility {
    export interface ICallbacks {
        Success?: (response?: any) => void;
        Fail?: (response?: any) => void;
    }
}