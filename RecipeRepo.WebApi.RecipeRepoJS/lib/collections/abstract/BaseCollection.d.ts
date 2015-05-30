declare module Collections {
    class BaseCollection<TItem> {
        private controller;
        protected items: Array<TItem>;
        constructor(controller: IController);
        Get(): void;
        ItemAt(index: number): TItem;
        Count(): number;
        Any(predicate?: IPredicate<TItem>): boolean;
        Where(predicate: IPredicate<TItem>): TItem[];
    }
}
