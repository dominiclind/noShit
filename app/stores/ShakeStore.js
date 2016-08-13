import {
  observable,
  autorun,
  computed,
  action,
  reaction
} from 'mobx';
import store from 'react-native-simple-store';

import uid from 'app/utils/uid';
//
// mobx store for ShakeStore
//
class ShakeStore {
  @observable shakes = []
  goal = 5;
  @computed get today() {
    const today = this.shakes.map(shake => {
      const current = new Date().setHours(0, 0, 0, 0);
      const check = new Date(shake.dateAdded).setHours(0, 0, 0, 0);

      if(current === check){
        return shake
      }
    });
    return today;
  }

  constructor() {
    reaction(() => this.shakes.length, () => {
      //store.save('shakes', this.shakes);
    })

    autorun(() => {
      // store.delete('shakes');
      // store.get('shakes').then(saved => {
      //   if (saved) {
      //     this.shakes = saved;
      //   }
      // });
    })
  }

  // actions
  @action addShake() {
    this.shakes.push({
      id: uid(),
      dateAdded: new Date()
    });
  }
}
export default new ShakeStore();
