module Collections {
    export class BaseCollection<TItem> {
        private controller: IController;
        protected items: Array<TItem>;

        constructor(controller: IController) {
            this.controller = controller;
            this.items = [];
        }

        Get() {
            this.controller.getJson()
                .done((response: Array<any>) => {
                var me = this;

                _.forEach(response,(item) => {
                    me.items.push(item);
                });
            });
        }

        ItemAt(index: number) {
            return this.items[index];
        }

        Count() {
            return this.items.length;
        }

        Any(predicate?: IPredicate<TItem>) {
            if (!predicate) {
                return this.items.length > 0;
            }

            return _.some(this.items, predicate);
        }

        Where(predicate: IPredicate<TItem>) {
            if (!predicate) {
                return [];
            }

            return _.filter(this.items, predicate);
        }
    }
}