const tickets = [
  { name: 'The Verse', price: '$900' },
  { name: 'The Story', price: '$1,700' },
];

export default function Tickets() {
  return (
    <div className="tickets">
      {tickets.map((t) => (
        <div className="ticket" key={t.name}>
          <div className="stub" aria-hidden="true">
            <span className="admit">Admit one</span>
            <span className="gc">Gift card</span>
            <span className="no">No. ___ of 10</span>
          </div>
          <div className="ticket-body">
            <span className="good">Gift card · good for one session</span>
            <h3>{t.name}</h3>
            <p className="muted">Session by March 31, 2027. Tax paid up front.</p>
            <span className="price">{t.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
