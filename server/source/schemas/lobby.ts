import mongoose from 'lib/mongoose';

const LobbySchema = new mongoose.Schema({
  title: {
    type: String,
  },

  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },

  owner: {
    type: String,
  },

  users: {
    // type: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    // }],
    type: [{
      type: String,
    }],
  },

  chat: [{
    message: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  }],

  dates: {
    created: {
      type: Date,
      required: true,
    },
    started: {
      type: Date,
    },
    finished: {
      type: Date,
    },
    deleted: {
      type: Date,
    },
  },
}, {
  minimize: false,
  toJSON: {
    virtuals: true,
  },
});

const LobbyModel = mongoose.model('Lobby', LobbySchema);

export {
  LobbyModel,
  LobbySchema
};