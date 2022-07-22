import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';
import {mocha, configure} from 'approvals';
import {Context} from 'mocha';

describe('Gilded Rose', () => {
  mocha(__dirname);
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('foo');
  });

  it('should pass APPROVAL', function (this: Context) {

    const items: Item[] = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ];
    
    const gildedRose = new GildedRose(items);

    const days: number = 10;

    const results: Item[][] = [];

    for (let day = 0; day < days; day++) {
      gildedRose.updateQuality();

      results.push([]);

      items.forEach((item) => {
        const value = {
          name: item.name,
          sellIn: item.sellIn,
          quality: item.quality,
        };
        results[day].push(value);
      });
    }

    this.verify(JSON.stringify(results, null, 4));
  });
});



describe('When running some tests', function () {
  mocha(__dirname);
  it('should be able to use Approvals', function (this: Context) {
    var data = "Hello World!";
    this.verify(data);  // or this.verifyAsJSON(data)
  });
});
