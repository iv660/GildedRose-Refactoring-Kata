import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it('should pass APPROVAL', () => {
    const expected = [
      [
        { name: "+5 Dexterity Vest", sellIn: 9, quality: 19 },
        { name: "Aged Brie", sellIn: 1, quality: 1 },
        { name: "Elixir of the Mongoose", sellIn: 4, quality: 6 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 14,
          quality: 21,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 9,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 4,
          quality: 50,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 8, quality: 18 },
        { name: "Aged Brie", sellIn: 0, quality: 2 },
        { name: "Elixir of the Mongoose", sellIn: 3, quality: 5 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 13,
          quality: 22,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 8,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 3,
          quality: 50,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 7, quality: 17 },
        { name: "Aged Brie", sellIn: -1, quality: 4 },
        { name: "Elixir of the Mongoose", sellIn: 2, quality: 4 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 12,
          quality: 23,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 7,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 2,
          quality: 50,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 6, quality: 16 },
        { name: "Aged Brie", sellIn: -2, quality: 6 },
        { name: "Elixir of the Mongoose", sellIn: 1, quality: 3 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 11,
          quality: 24,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 6,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 1,
          quality: 50,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 5, quality: 15 },
        { name: "Aged Brie", sellIn: -3, quality: 8 },
        { name: "Elixir of the Mongoose", sellIn: 0, quality: 2 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 10,
          quality: 25,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 5,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 0,
          quality: 50,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 4, quality: 14 },
        { name: "Aged Brie", sellIn: -4, quality: 10 },
        { name: "Elixir of the Mongoose", sellIn: -1, quality: 0 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 9,
          quality: 27,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 4,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: -1,
          quality: 0,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 3, quality: 13 },
        { name: "Aged Brie", sellIn: -5, quality: 12 },
        { name: "Elixir of the Mongoose", sellIn: -2, quality: 0 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 8,
          quality: 29,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 3,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: -2,
          quality: 0,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 2, quality: 12 },
        { name: "Aged Brie", sellIn: -6, quality: 14 },
        { name: "Elixir of the Mongoose", sellIn: -3, quality: 0 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 7,
          quality: 31,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 2,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: -3,
          quality: 0,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 1, quality: 11 },
        { name: "Aged Brie", sellIn: -7, quality: 16 },
        { name: "Elixir of the Mongoose", sellIn: -4, quality: 0 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 6,
          quality: 33,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 1,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: -4,
          quality: 0,
        },
      ],
      [
        { name: "+5 Dexterity Vest", sellIn: 0, quality: 10 },
        { name: "Aged Brie", sellIn: -8, quality: 18 },
        { name: "Elixir of the Mongoose", sellIn: -5, quality: 0 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
        { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 5,
          quality: 35,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 0,
          quality: 50,
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: -5,
          quality: 0,
        },
      ],
    ];

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
      // new Item("Conjured Mana Cake", 3, 6)
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

    console.log(JSON.stringify(results));
    expect(results).toEqual(expected);
  })
});
