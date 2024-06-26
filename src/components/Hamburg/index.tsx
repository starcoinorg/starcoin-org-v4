
export default function Hamburg({
  onChange,
  pressed,
}: {
  onChange: (s: boolean) => void,
  pressed: boolean,
}) {

  function toggle_pressed() {
    onChange(!pressed)
  }

  return (
    <button className="hamburg" aria-pressed={pressed} onClick={toggle_pressed}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="icon--hamburg">
        <g fill="var(--fill-color)">
          <rect width="18" height="1.5" ry="0.75" x="3" y="6.25" />
          <rect width="18" height="1.5" ry="0.75" x="3" y="11.25" />
          <rect width="18" height="1.5" ry="0.75" x="3" y="16.25" />
        </g>
      </svg>
    </button>
  );
}
