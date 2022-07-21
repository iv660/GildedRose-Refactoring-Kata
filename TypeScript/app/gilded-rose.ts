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
          break;

        case ItemTypeName.BackstagePass:
          this.increaseBackstagePassQuality(item);
          this.decreaseSellIn(item);
          break;

        case ItemTypeName.Sulfuras:
          this.increaseQuality(item);
          break;

        default:
          this.decreaseQuality(item);
          this.decreaseSellIn(item);
          break;
      }

      if (item.sellIn < 0) {
        if (item.name != ItemTypeName.AgedBrie) {
          if (item.name != ItemTypeName.BackstagePass) {
            if (item.quality > 0) {
              if (item.name != ItemTypeName.Sulfuras) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          this.increaseQuality(item);
        }
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

  private increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private increaseBackstagePassQuality(item: Item) {
    this.increaseQuality(item);

    if (item.sellIn < 11) {
      this.increaseQuality(item);
    }

    if (item.sellIn < 6) {
      this.increaseQuality(item);
    }
  }
}
