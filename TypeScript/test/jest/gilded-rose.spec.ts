import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should pass APPROVAL', () => {
    const expected = JSON.parse('[[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}],[{"name":"+5 Dexterity Vest","sellIn":10,"quality":20},{"name":"Aged Brie","sellIn":2,"quality":0},{"name":"Elixir of the Mongoose","sellIn":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sellIn":0,"quality":80},{"name":"Sulfuras, Hand of Ragnaros","sellIn":-1,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":15,"quality":20},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":49},{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":49},{"name":"Conjured Mana Cake","sellIn":3,"quality":6}]]');

    const items: Item[] = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)];
    
    const gildedRose = new GildedRose(items);

    const days: number = 10;

    const results: Item[][] = [];

    for (let day = 0; day < days; day++) {
      results.push([]);
      items.forEach(item => {
        const value = {name: item.name, sellIn: item.sellIn, quality: item.quality};
        results[day].push(value);
      });
    }

    expect(results).toEqual(expected);
    console.log(JSON.stringify(results));
  })
});
