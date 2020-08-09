import { configure, decorate, observable, action } from "mobx";

configure({ enforceActions: "observed" });

class Store {
    constructor() {
        this.count = 0;
    }

    setCount() {
        this.count = 1;
    }
}

decorate(Store, {
    count: observable,
    setCount: action
  });

export default Store;