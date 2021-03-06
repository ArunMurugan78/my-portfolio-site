import React, { ReactElement, useState } from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";
import { isVisible } from "../../utils";

interface Props {
  sections: { description: string; idOfSection: string }[];
}

export default function SidePositionIndicator(props: Props): ReactElement {
  const { sections } = props;
  const [current, setCurrent] = useState(0);
  const elements: HTMLElement[] = sections.map((o) => {
    return (
      typeof window !== "undefined" &&
      window.document.getElementById(o.idOfSection)
    );
  });
  if (typeof window !== "undefined")
    window.addEventListener("scroll", (_) => {
      let curr = -1;
      for (let i = 0; i < elements.length; i++) {
        if (isVisible(elements[i])) {
          curr = i;
        }
      }
      if (current != curr) {
        setCurrent(curr);
      }
    });

  return (
    <div className={styles.container} aria-for="This Page Navigation">
      {sections.map((o, i) => {
        return (
          <Link
            key={i}
            to={`/#${o.idOfSection}`}
            accessKey={`${i}`}
            className={styles.item}
            title={`Jump to ${o.description}`}
          >
            <svg
              style={{ margin: "20px" }}
              width="11"
              height="11"
              viewBox="0 0 11 11"
              className={i == current ? styles.fillGreen : styles.fillNone}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="5.5"
                cy="5.5"
                r="5"
                stroke={i == current ? "lightgreen" : "#97979F"}
              />
            </svg>
          </Link>
        );
      })}
    </div>
  );
}
