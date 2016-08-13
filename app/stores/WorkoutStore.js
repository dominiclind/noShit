import {
  observable,
  autorun,
  computed,
  action,
  reaction
} from 'mobx';
//
// mobx store for WorkoutStore
//
class WorkoutStore {
  @observable currentRoute = '';
  @observable arrayOfThings = []
  @computed get amountOfThings() {
      return this.arrayOfThings.length;
  }
  constructor() {

  }
}
export default new WorkoutStore();
