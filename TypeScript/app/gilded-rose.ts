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

// ========================== PRIVATE MODULE MEMBERS ==========================

interface ItemOfTypeInterface {
  updateQuality(): void;
}

class ItemHelper {
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
}

class DefaultItem implements ItemOfTypeInterface {
  private helper: ItemHelper;
  constructor(item: Item) {
    this.helper = new ItemHelper(item);
  }

  updateQuality(): void {
    this.helper.decreaseQuality();
    this.helper.decreaseSellIn();
    if (this.helper.isOutdated) {
      this.helper.decreaseQuality();
    }
  }
}

class ConjuredItem implements ItemOfTypeInterface {
  private helper: ItemHelper;
  constructor(item: Item) {
    this.helper = new ItemHelper(item);
  }

  updateQuality(): void {
    this.helper.decreaseQuality();
    this.helper.decreaseQuality();
    this.helper.decreaseSellIn();
    if (this.helper.isOutdated) {
      this.helper.decreaseQuality();
      this.helper.decreaseQuality();
    }
  }
}

class AgedBrieItem implements ItemOfTypeInterface {
  private helper: ItemHelper;
  constructor(item: Item) {
    this.helper = new ItemHelper(item);
  }

  updateQuality(): void {
    this.helper.increaseQuality();
    this.helper.decreaseSellIn();
    if (this.helper.isOutdated) {
      this.helper.increaseQuality();
    }
  }
}

class BackstagePassItem implements ItemOfTypeInterface {
  private helper: ItemHelper;
  constructor(item: Item) {
    this.helper = new ItemHelper(item);
  }

  updateQuality(): void {
    this.helper.increaseQuality();

    if (this.helper.sellIn < 11) {
      this.helper.increaseQuality();
    }

    if (this.helper.sellIn < 6) {
      this.helper.increaseQuality();
    }

    this.helper.decreaseSellIn();

    if (this.helper.isOutdated) {
      this.helper.dropQuality();
    }
  }
}

class SulfurasItem implements ItemOfTypeInterface {
  private helper: ItemHelper;
  constructor(item: Item) {
    this.helper = new ItemHelper(item);
  }

  updateQuality(): void {
    this.helper.increaseQuality();
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

