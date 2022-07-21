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

interface ItemOfTypeInterface {
  name: string;
  sellIn: number;
  isOutdated: boolean;

  increaseQuality(): void;
  decreaseQuality(): void;
  dropQuality(): void;
  decreaseSellIn(): void;

  updateQuality(): void;
}

abstract class ItemOfType implements ItemOfTypeInterface {
  constructor(private item: Item) {}

  get name(): string {
    return this.item.name;
  }

  get sellIn(): number {
    return this.item.sellIn;
  }

  get isOutdated(): boolean {
    if (this.item.sellIn < 0) {
      return true;
    }

    return false;
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

  decreaseSellIn(): void {
    this.item.sellIn--;
  }

  dropQuality(): void {
    this.item.quality = 0;
  }

  abstract updateQuality(): void;
}

class DefaultItem extends ItemOfType {
  updateQuality(): void {
    this.decreaseQuality();
    this.decreaseSellIn();
    if (this.isOutdated) {
      this.decreaseQuality();
    }
  }
}

class ConjuredItem extends ItemOfType {
  updateQuality(): void {
    this.decreaseQuality();
    this.decreaseQuality();
    this.decreaseSellIn();
    if (this.isOutdated) {
      this.decreaseQuality();
      this.decreaseQuality();
    }
  }
}

class AgedBrieItem extends ItemOfType {
  updateQuality(): void {
    this.increaseQuality();
    this.decreaseSellIn();
    if (this.isOutdated) {
      this.increaseQuality();
    }
  }
}

class BackstagePassItem extends ItemOfType {
  updateQuality(): void {
    this.increaseQuality();

    if (this.sellIn < 11) {
      this.increaseQuality();
    }

    if (this.sellIn < 6) {
      this.increaseQuality();
    }

    this.decreaseSellIn();

    if (this.isOutdated) {
      this.dropQuality();
    }
  }
}

class SulfurasItem extends ItemOfType {
  updateQuality(): void {
    this.increaseQuality();
  }
}

class ItemOfTypeFactory {
  create(item: Item): ItemOfTypeInterface {
    switch (item.name) {
      case "Aged Brie": 
        return new AgedBrieItem(item);
      case "Backstage passes to a TAFKAL80ETC concert":
        return new BackstagePassItem(item);
      case "Sulfuras, Hand of Ragnaros":
        return new SulfurasItem(item);
      case "Conjured Mana Cake":
        return new ConjuredItem(item);
      default:
        return new DefaultItem(item);
    }
  }
}

export class GildedRose {
  items: Array<Item>;
  private factory: ItemOfTypeFactory;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.factory = new ItemOfTypeFactory();
  }

  updateQuality(): Item[] {
    for (let i = 0; i < this.items.length; i++) {
      const itemOfType: ItemOfTypeInterface = this.createItemOfType(this.items[i]);

      itemOfType.updateQuality();
    }

    return this.items;
  }

  private createItemOfType(item: Item): ItemOfTypeInterface {
    return this.factory.create(item);
  }
}
