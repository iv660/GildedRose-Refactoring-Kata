import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';
import {mocha} from 'approvals';
import {Context} from 'mocha';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('foo');
  });
});



describe('When running some tests', function () {
  mocha(__dirname);
  it('should be able to use Approvals', function (this: Context) {
    var data = "Hello World!";
    this.verify(data);  // or this.verifyAsJSON(data)
  });
});
