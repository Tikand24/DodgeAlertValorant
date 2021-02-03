import { breakpoints } from "../../styles/theme";

export default function ListItem({ item }) {
  return (
    <>
      <div>
        <span>{item}</span>
        <button>*</button>
        <button>X</button>
      </div>
      <style jsx>{`
        div {
          padding: 0.5em 0 0.5em 2em;
          width: 100%;
        }
        @media (min-width: ${breakpoints.mobile}) {
          div {
            width: 50%;
          }
        }
        button {
            text-align:right;
        }
      `}</style>
    </>
  );
}
