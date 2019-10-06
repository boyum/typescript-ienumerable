import ICollection from './ICollection';

export default class Collection<T>
  implements ICollection<T> {
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
    throw new Error('Method not implemented.');
  }
  CopyTo(array: T[], arrayIndex: number): void {
    throw new Error('Method not implemented.');
  }
  Get(index: number): T {
    throw new Error('Method not implemented.');
  }
  Remove(item: T): boolean {
    throw new Error('Method not implemented.');
  }

  *[Symbol.iterator](): Iterator<T> {
    for (let item of this.items) {
      yield item;
    }
  }
  //#endregion
}
