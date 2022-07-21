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
  
  updateQuality() {
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];

        this.updateItemQuality(item);
        this.updateItemSellIn(item);
    }

    return this.items;
  }

  private isConventional(item: Item) {
    if (item.name == 'Aged Brie') {
      return false;
    }

    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      return false;
    }

    return true;
  } 
  
  private updateItemQuality (item: Item) {
    if (this.isConventional(item)) {
      if (item.quality > 0) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.quality = item.quality - 1
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
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
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
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

  private updateItemSellIn (item: Item) {
    switch (item.name) {
      case 'Sulfuras, Hand of Ragnaros':
        break;
      case 'Aged Brie':
      case 'Backstage passes to a TAFKAL80ETC concert':
      default:
        item.sellIn--;
        break;
    }
  }
}
