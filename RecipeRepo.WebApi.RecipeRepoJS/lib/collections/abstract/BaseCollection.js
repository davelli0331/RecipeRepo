var Collections;
(function (Collections) {
    var BaseCollection = (function () {
        function BaseCollection(controller) {
            this.controller = controller;
            this.items = [];
        }
        BaseCollection.prototype.Get = function () {
            var _this = this;
            this.controller.getJson().done(function (response) {
                var me = _this;
                _.forEach(response, function (item) {
                    me.items.push(item);
                });
            });
        };
        BaseCollection.prototype.ItemAt = function (index) {
            return this.items[index];
        };
        BaseCollection.prototype.Count = function () {
            return this.items.length;
        };
        BaseCollection.prototype.Any = function (predicate) {
            if (!predicate) {
                return this.items.length > 0;
            }
            return _.some(this.items, predicate);
        };
        BaseCollection.prototype.Where = function (predicate) {
            if (!predicate) {
                return [];
            }
            return _.filter(this.items, predicate);
        };
        return BaseCollection;
    })();
    Collections.BaseCollection = BaseCollection;
})(Collections || (Collections = {}));
