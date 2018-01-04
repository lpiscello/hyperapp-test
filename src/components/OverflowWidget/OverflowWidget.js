import { h } from "hyperapp";

import styles from "./OverflowWidget.css";

const OverflowWidget = ({ text, offset, count }) => (
  <div class={styles.overflow}>
    <h1>Whoops! Too long.</h1>
    <p>
      ...{text.slice(0, offset)}
      <span class={styles.overflowText}>{text.slice(count)}</span>
    </p>
  </div>
);

export default OverflowWidget;
