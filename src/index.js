import { h, app } from 'hyperapp';

import Tweetbox from './components/TweetBox';

const MAX_LENGTH = 120;

const state = {
  text: "",
  count: MAX_LENGTH,
};

const actions = {
  update: text => state => ({
    text,
    count: state.count + state.text.length - text.length,
  }),
};

const view = (state, actions) => (
  <Tweetbox
    maxLenght={MAX_LENGTH}
    text={state.text}
    count={state.count}
    update={e => actions.update(e.target.value)}
  />
);

const main = app(state, actions, view, document.body);
