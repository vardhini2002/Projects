import { useAppSelector } from "../store/hooks";

function SneakerPreview() {
  const upperColor = useAppSelector(
  (state) => state.design.components.upper
);

const soleColor = useAppSelector(
  (state) => state.design.components.sole
);

const lacesColor = useAppSelector(
  (state) => state.design.components.laces
);

  return (
    <svg
      width="600"
      height="400"
      viewBox="0 0 600 400"
    >

      <path
        id="upper"
        d="M100 220
           L180 120
           L350 140
           L430 220
           L500 250
           L450 290
           L120 290
           Z"
        fill={upperColor}
        stroke="#111111"
        strokeWidth="5"
      />

      <path
        id="sole"
        d="M100 275
           L450 275
           L500 295
           L490 330
           L120 330
           L90 305
           Z"
        fill={soleColor}
        stroke="#111111"
        strokeWidth="5"
      />

      <line
        x1="210"
        y1="155"
        x2="290"
        y2="185"
        stroke={lacesColor}
        strokeWidth="7"
      />

      <line
        x1="205"
        y1="175"
        x2="285"
        y2="205"
        stroke={lacesColor}
        strokeWidth="7"
      />

      <line
        x1="200"
        y1="195"
        x2="280"
        y2="225"
        stroke={lacesColor}
        strokeWidth="7"
      />

    </svg>
  );
}

export default SneakerPreview;