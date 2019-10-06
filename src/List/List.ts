import IList from './IList';
import Collection from '../Collection/Collection';

export default class List<T> extends Collection<T> implements IList<T> {
  //#region Properties
  public get Count() {
    return this.items.length;
  }
  //#endregion
}
