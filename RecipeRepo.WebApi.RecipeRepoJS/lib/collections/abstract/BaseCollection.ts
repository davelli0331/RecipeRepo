module Collections {
    export class BaseCollection<TItem> {
        private controller: Controllers.IController;
        protected items: Array<TItem>;

        constructor(controller: Controllers.IController) {
            this.controller = controller;
            this.items = [];
        }

        Get(callBacks?: Utility.ICallbacks) {
            callBacks = callBacks || {};

            this.controller.getJson()
                .then((response: Array<any>) => {
                    var me = this;

                    _.forEach(response,(item) => {
                        me.AddItem(item);
                    });

                    if (callBacks.Success) {
                        callBacks.Success();
                    }
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

        protected AddItem(item: any) {
            this.items.push(item);
        }
    }
}