import HistoryItem from '../HistoryItem';
export default function History({ histories }) {
  return (
    <>
      <div>
        <h2>Historial</h2>
        {histories.map((history, index) => (
          <section key={`section${index}`}>
            <HistoryItem item={history} key={`history${index}`}></HistoryItem>
          </section>
        ))}
      </div>
      <style jsx>{`
        section {
          margin-bottom: 10px;
          background: #222222;
        }
      `}</style>
    </>
  );
}
