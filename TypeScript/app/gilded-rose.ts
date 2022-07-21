enum ItemTypeName {
  Sulfuras = "Sulfuras, Hand of Ragnaros",
  BackstagePass = "Backstage passes to a TAFKAL80ETC concert",
  AgedBrie = "Aged Brie",
}

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      switch (item.name) {
        case ItemTypeName.AgedBrie:
          this.increaseQuality(item);
          this.decreaseSellIn(item);
          if (this.isOutdatedItem(item)) {
            this.increaseQuality(item);
          }
          break;

        case ItemTypeName.BackstagePass:
          this.increaseBackstagePassQuality(item);
          this.decreaseSellIn(item);
          if (this.isOutdatedItem(item)) {
            item.quality = 0;
          }
          break;

        case ItemTypeName.Sulfuras:
          this.increaseQuality(item);
          break;

        default:
          this.decreaseQuality(item);
          this.decreaseSellIn(item);
          if (this.isOutdatedItem(item)) {
            this.decreaseQuality(item);
          }
          break;
      }
    }

    return this.items;
  }

  private decreaseQuality(item: Item): void {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  private decreaseSellIn(item: Item): void {
    item.sellIn--;
  }

  private increaseQuality(item: Item): void {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private increaseBackstagePassQuality(item: Item): void {
    this.increaseQuality(item);

    if (item.sellIn < 11) {
      this.increaseQuality(item);
    }

    if (item.sellIn < 6) {
      this.increaseQuality(item);
    }
  }

  private isOutdatedItem(item: Item): boolean {
    if (item.sellIn < 0) {
      return true;
    }

    return false;
  }
}
