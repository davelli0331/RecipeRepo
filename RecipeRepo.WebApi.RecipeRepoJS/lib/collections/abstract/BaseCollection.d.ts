declare module Collections {
    class BaseCollection<TItem> {
        private controller;
        protected items: Array<TItem>;
        constructor(controller: Controllers.IController);
        Get(callBacks?: Utility.ICallbacks): void;
        ItemAt(index: number): TItem;
        Count(): number;
        Any(predicate?: IPredicate<TItem>): boolean;
        Where(predicate: IPredicate<TItem>): TItem[];
        protected AddItem(item: any): void;
    }
}
