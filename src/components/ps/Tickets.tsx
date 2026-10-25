const tickets = [
  { name: 'The Verse', price: '$900' },
  { name: 'The Story', price: '$1,700' },
];

// The Gift Session ticket. The person you give it to gets a ticket, not a card.
export function TicketStub() {
  return (
    <div className="stub" aria-hidden="true">
      <span className="admit">Admit one</span>
      <span className="gc">Gift Session</span>
      <span className="edition"><span>Limited edition</span><span>Christmas ’26</span></span>
    </div>
  );
}

export default function Tickets() {
  return (
    <div className="tickets">
      {tickets.map((t) => (
        <div className="ticket" key={t.name}>
          <TicketStub />
          <div className="ticket-body">
            <span className="good">Good for one story portrait session</span>
            <h3>{t.name}</h3>
            <p className="muted">Session by March 31, 2027. Tax paid up front.</p>
            <span className="price">{t.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
