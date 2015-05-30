declare module Collections {
    interface IPredicate<TItem> {
        (item: TItem): boolean;
    }
    interface IProperties extends Object {
    }
}
