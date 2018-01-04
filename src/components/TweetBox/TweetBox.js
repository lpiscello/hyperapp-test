import { h } from 'hyperapp';

import styles from './TweetBox.css';
import OverflowWidget from '../OverflowWidget';

const OFFSET = 10;
const Tweetbox = ({ maxLenght, count, text, update }) => (
  <main>
    <div class={styles.container}>
      <ul class={styles.flexOuter}>
        <li>
          <textarea placeholder="What's up?" value={text} oninput={update} />
        </li>

        <li class={styles.flexInner}>
          <span class={count > OFFSET ? '' : styles.overflowCount}>{count}</span>

          <button
            onclick={() => alert(text)}
            disabled={count >= maxLenght || count < 0}
          >
            Tweet
          </button>
        </li>
      </ul>

      {count < 0 && (
        <OverflowWidget
          text={text.slice(count - OFFSET)}
          offset={OFFSET}
          count={count}
        />
      )}
    </div>
  </main>
);

export default Tweetbox;
