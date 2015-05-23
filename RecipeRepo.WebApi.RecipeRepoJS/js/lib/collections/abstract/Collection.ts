class Collection<TItem> {
    private items: TItem[];

    constructor() { }

    Add(item: TItem) {
        this.items.push(item);
    }
}