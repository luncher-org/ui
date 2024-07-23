import { set } from '@ember/object';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import ModalBase from 'shared/mixins/modal-base';
import layout from './template';

export default Component.extend(ModalBase, {
  layout,
  classNames: ['large-modal'],

  editing: true,

  callback:        alias('modalService.modalOpts.callback'),
  namespace:       alias('modalService.modalOpts.namespace'),
  model:           alias('modalService.modalOpts.model'),

  init() {
    this._super(...arguments);

    if ( !this.model ) {
      set(this, 'model', {});
    }
  },

  actions: {
    doSave() {
      let callback = this.callback;

      if ( callback ) {
        callback(this.model);
      }

      this.send('cancel');
    }
  }
});
