import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked
  arg = 5;

  init() {
    super.init(...arguments);
    later(() => this.arg = 10, 2000);
  }
}
