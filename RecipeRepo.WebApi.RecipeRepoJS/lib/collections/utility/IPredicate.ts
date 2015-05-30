module Collections {
    export interface IPredicate<TItem> {
        (item: TItem) : boolean
    }

    export interface IProperties extends Object {
    }
}