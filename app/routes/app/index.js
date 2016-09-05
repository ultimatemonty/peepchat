import Ember from 'ember';

const { inject, Route, RSVP } = Ember;
const { service } = inject;

export default Route.extend({
  flashMessages: service(),

  model() {
    return RSVP.hash({
      rooms: this.store.findAll('room'),
      newRoom: {name: '', errors: []}
    });
  },

  actions: {
    createRoom() {
      let data = this.get('currentModel.newRoom');
      let room = this.store.createRecord('room', {name: data.name});
      this.set('currentModel.newRoom.errors', []);

      const flashMessages = this.get('flashMessages');
      room.save().then(() => {
        flashMessages.success(`Created room: ${data.name}`);
        this.set('currentModel.newRoom.name', ''); // clear the input
      }).catch((err) => {
        this.store.unloadRecord(room);
        this.set('currentModel.newRoom.errors', (err.errors || []).mapBy('detail'));
        flashMessages.danger(`Problem creating room ${data.name}`);
      });
    },
    
    removeRoom(room) {
      const flashMessages = this.get('flashMessages');
      if (window.confirm('Are you sure?')) {
        room.destroyRecord().then(() => {
          flashMessages.success(`Deleted room ${room.get('name')}`);
        }).catch(() => {
          flashMessages.danger(`Problem deleting room: ${room.get('name')}`);
        });
      }
    }
  }
});
