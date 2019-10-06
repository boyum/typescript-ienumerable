export default interface ICollection<T> {
  Count: number;
  IsReadOnly: boolean;

  [Symbol.iterator](): Iterator<T>;

  Add(item: T): void;
  Clear(): void;
  Contains(item: T): boolean;
  CopyTo(array: Array<T>, arrayIndex: number): Array<T>;
  Get(index: number): T;
  Remove(item: T): boolean;
}