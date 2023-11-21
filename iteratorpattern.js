const items = [1, 2, "devsage", false, 1.24];

function Iterator(items) {
  this.items = items;
  this.index = items.length - 1;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index >= 0;
  },
  next: function () {
    return this.items[this.index--];
  },
};

const iter = new Iterator(items);

while (iter.hasNext()) console.log(iter.next());
