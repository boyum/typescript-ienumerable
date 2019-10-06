import ICollection from './ICollection';

export default class Collection<T> implements ICollection<T> {
  //#region Fields
  protected items: Array<T> = [];
  //#endregion

  //#region Properties
  public IsReadOnly: boolean = false;

  public get Count(): number {
    return this.items.length;
  }
  //#endregion

  //#region Methods
  Add(item: T): void {
    this.items.push(item);
  }

  Clear(): void {
    this.items.length = 0;
  }

  Contains(item: T): boolean {
    return this.items.includes(item);
  }

  CopyTo(array: T[], arrayIndex: number): Array<T> {
    if (arrayIndex < 0) { throw new Error('Array index must be greater than 0'); }

    const addToEndOfArray = arrayIndex >= array.length;
    if (addToEndOfArray) {
      array = [...array, ...this.items];
    } else {
      array = [...array.slice(0, arrayIndex), ...this.items, ...array.slice(arrayIndex)]
    }

    return array;
  }

  Get(index: number): T {
    return this.items[index];
  }

  Remove(item: T): boolean {
    const collectionIsEmpty = this.Count === 0;
    const collectionDoesNotContainItem = !this.items.includes(item);
    if (collectionIsEmpty || collectionDoesNotContainItem) {
      return false;
    }

    const indexOfItem = this.items.indexOf(item);
    this.items.splice(indexOfItem, 1);

    return true;
  }

  *[Symbol.iterator](): Iterator<T> {
    for (let item of this.items) {
      yield item;
    }
  }
  //#endregion
}
