import ICollection from './ICollection';
import Collection from './Collection';

let collection: ICollection<string>;

beforeEach(() => {
  collection = new Collection<string>();
});

test('New collections are empty', () => {
  expect(collection.Count).toBe(0);
});

test('Add() adds one (1) item to the collection', () => {
  expect(collection.Count).toBe(0);

  const item = 'item';
  collection.Add(item);

  expect(collection.Count).toBe(1);
  expect(collection.Contains(item)).toBeTruthy();
});

test('Collections can be enumerated over', () => {
  const numberOfItems = 3;

  for (let i = 0; i < numberOfItems; i++) {
    collection.Add('item' + i);
  }

  let counter = 0;

  for (let _ of collection) {
    counter++;
  }

  expect(counter).toBe(numberOfItems);
});

test('Remove() removes one (1) item from the collection', () => {
  collection.Add('item');
  collection.Add('item');
  collection.Remove('item');

  expect(collection.Count).toBe(1);
});

test('Remove() does nothing if the collection is empty', () => {
  expect(collection.Count).toBe(0);
  expect(collection.Remove.bind(collection, 'item')).not.toThrowError();
});

test('Remove() returns true if it removes an item that exists', () => {
  collection.Add('item');
  const removed = collection.Remove('item');

  expect(removed).toBeTruthy();
});

test('Remove() returns false if it removes an item that doesn\'t exist', () => {
  collection.Add('item');
  const removed = collection.Remove('wrong');

  expect(removed).toBeFalsy();
});

test('Clear() removes all items in a collection', () => {
  collection.Add('item');
  collection.Add('item');
  collection.Clear();

  expect(collection.Count).toBe(0);
});

test('Clear() does nothing if the collection is empty', () => {
  expect(collection.Count).toBe(0);
  expect(collection.Clear.bind(collection)).not.toThrowError();
});

test('Get() returns the item at the given position', () => {
  collection.Add('0');
  collection.Add('1');
  collection.Add('2');

  expect(collection.Get(1)).toBe('1');
});
