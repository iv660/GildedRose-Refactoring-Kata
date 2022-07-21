enum ItemTypeName {
  Sulfuras = 'Sulfuras, Hand of Ragnaros',
  BackstagePass = 'Backstage passes to a TAFKAL80ETC concert',
  AgedBrie = 'Aged Brie'
};

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
          break;
      }

      if (this.isConventional(item)) {
        if (item.quality > 0) {
          item.quality = item.quality - 1
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.name == ItemTypeName.BackstagePass) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != ItemTypeName.BackstagePass) {
            if (item.quality > 0) {
              if (item.name != ItemTypeName.Sulfuras) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
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
}
