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
          break;

        case ItemTypeName.BackstagePass:
          break;

        case ItemTypeName.Sulfuras:
          break;

        default:
          this.decreaseQuality(item);
          break;
      }

      if (this.isConventional(item)) {
      } else {
        if (item.name == ItemTypeName.BackstagePass) {
          this.increaseBackstagePassQuality(item);
        } else {
          this.increaseQuality(item);
        }
      }

      if (item.name != ItemTypeName.Sulfuras) {
        this.decreaseSellIn(item);
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

  private isConventional(item: Item): boolean {
    if (item.name == ItemTypeName.AgedBrie) {
      return false;
    }

    if (item.name == ItemTypeName.BackstagePass) {
      return false;
    }

    if (item.name == ItemTypeName.Sulfuras) {
      return false;
    }

    return true;
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
