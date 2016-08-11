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

  // simple jarring jump to screen func
  @action goTo(screen) {
    this.currentRoute = screen;
  }
}
const app = new ApplicationStore();

// on every route change, persist route
reaction(() => app.currentRoute,() => {
  store.save('currentRoute', app.currentRoute);
});

// rehydrate app
autorun(() => {
  store.get('currentRoute').then((route) => {
    if (route) {
      app.currentRoute = route;
    }
    app.hydrated = true;
  })
});

export default app;
