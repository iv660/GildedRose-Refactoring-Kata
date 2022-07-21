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

class ItemOfType {
  constructor(private item: Item) {}

  get name(): string {
    return this.item.name;
  }

  increaseQuality(): void {
    if (this.item.quality < 50) {
      this.item.quality++;
    }
  }

  decreaseQuality(): void {
    if (this.item.quality > 0) {
      this.item.quality--;
    }
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
      const itemOfType = new ItemOfType(item);

      switch (itemOfType.name) {
        case ItemTypeName.AgedBrie:
          itemOfType.increaseQuality();
          this.decreaseSellIn(item);
          if (this.isOutdatedItem(item)) {
            itemOfType.increaseQuality();
          }
          break;

        case ItemTypeName.BackstagePass:
          itemOfType.increaseQuality();

          if (item.sellIn < 11) {
            itemOfType.increaseQuality();
          }
      
          if (item.sellIn < 6) {
            itemOfType.increaseQuality();
          }

          this.decreaseSellIn(item);

          if (this.isOutdatedItem(item)) {
            this.zeroQualityOut(item);
          }
          break;

        case ItemTypeName.Sulfuras:
          itemOfType.increaseQuality();
          break;

        default:
          itemOfType.decreaseQuality();
          this.decreaseSellIn(item);
          if (this.isOutdatedItem(item)) {
            itemOfType.decreaseQuality();
          }
          break;
      }
    }

    return this.items;
  }

  private decreaseSellIn(item: Item): void {
    item.sellIn--;
  }

  private isOutdatedItem(item: Item): boolean {
    if (item.sellIn < 0) {
      return true;
    }

    return false;
  }

  private zeroQualityOut(item: Item): void {
    item.quality = 0;
  }
}
