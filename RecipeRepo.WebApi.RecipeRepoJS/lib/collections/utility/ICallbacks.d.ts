declare module Utility {
    interface ICallbacks {
        Success?: (response?: any) => void;
        Fail?: (response?: any) => void;
    }
}
