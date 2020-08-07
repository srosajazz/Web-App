import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/42471460?s=460&u=d8266ec25d17d375e01ae625cb93b947c57451bd&v=4"
          alt="Sergio Rosa"
        />
        <div>
          <strong>Sergio Rosa</strong>
          <span>Bass Lessons</span>
        </div>
      </header>

      <p>
        Ready to start rocking the bass? By the end of this article and video
        series, you’ll know everything you need to know about strap <br />
        <br />
        height, the parts of the bass, how to tune, and basic left and right
        hand techniques. We’ll even play some music together as we’re learning.
      </p>

      <footer>
        <p>
          Price/hour
          <strong>U$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Contact me.
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
