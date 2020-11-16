import Application from 'tracked-built-ins-bug/app';
import config from 'tracked-built-ins-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
