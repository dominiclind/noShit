import {
  observable,
  autorun,
  computed,
  action,
  reaction,
  transaction
} from 'mobx';
import store from 'react-native-simple-store';
//
// mobx store for Application
//
class ApplicationStore {
  @observable hydrated = false
  @observable currentRoute = ''
  @observable arrayOfThings = []
  @computed get amountOfThings() {
      return this.arrayOfThings.length;
  }

  constructor() {
    //on every route change, persist route
    reaction(() => this.currentRoute,() => {
      // store.save('currentRoute', this.currentRoute);
    });
    // rehydrate app
    autorun(() => {
      store.get('currentRoute').then((route) => {
        // if (route) {
        //   app.currentRoute = route;
        // }
        this.hydrated = true;
      })
    });
  }

  // simple jarring jump to screen func
  @action goTo(screen) {
    this.currentRoute = screen;
  }
}
export default new ApplicationStore();
