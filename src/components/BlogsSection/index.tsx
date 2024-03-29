import React, { ReactElement } from "react";
import { Link } from "gatsby";

import commonStyles from "../../styles/common.module.scss";
import { InsideMultilineCommentLikeText } from "../../components";

interface Props {}

export default function Blogs({}: Props): ReactElement {
  return (
    <div className={commonStyles.container}>
      <section id="blogs" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <h2 style={{ position: "relative", left: "10px" }}>Blog</h2>

        <InsideMultilineCommentLikeText
          text="Being a beginner blogger, I'm starting to love it!"
        />

        <Link
          style={{
            textDecoration: "none",
            position: "relative",
            left: "10px",
            paddingRight: "10px",
          }}
          to="/blogs"
          className={commonStyles.underlinedLink}
        >
          Go to my Blog{" "}
        </Link>
      </section>
    </div>
  );
}
