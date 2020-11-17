import Helper from '@ember/component/helper';

export default class Foo extends Helper {
  count = 0;
  pending = null;

  compute(...args) {
    const result = this.pending;
    if (result != null) {
      // args[0][0]; // uncommenting this line fixes the issue
      delete this.pending;
      return result;
    }

    setTimeout(() => this.setPending(args[0][0]), 1000);
  }

  setPending(number) {
    this.pending = number;
    this.recompute();
  }
}
