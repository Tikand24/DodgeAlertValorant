import { colors } from '../../styles/theme';

export default function Select({ data, onChange, value, key }) {
  return (
    <>
      <select onChange={onChange} value={value}>
        {data.map((d, index) => (
          <option key={`opt${key}${index}`} value={d}>
            {d}
          </option>
        ))}
      </select>
      <style jsx>{`
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          appearance: none;
          outline: 0;
          background: #222222;
          background-image: none;
        }
        select {
          padding: 0 0.5em;
          color: #fff;
          position: relative;
          display: flex;
          width: 100%;
          height: 3em;
          line-height: 3;
          background: #222222;
          overflow: hidden;
          border-radius: 0.25em;
          border: 1px solid #7b7b7b;
          cursor: pointer;
        }
        select::after {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 1em;
          background: #34495e;
          cursor: pointer;
          pointer-events: none;
          -webkit-transition: 0.25s all ease;
          -o-transition: 0.25s all ease;
          transition: 0.25s all ease;
        }
        select:hover::after {
          color: #f39c12;
        }
      `}</style>
    </>
  );
}
