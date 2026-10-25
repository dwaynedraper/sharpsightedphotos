export default function Plaque({ title, line, strong }: { title: string; line?: string; strong?: string }) {
  return (
    <p className="plaque">
      <b>{title}</b>
      {line && <span>{line}</span>}
      {strong && <strong>{strong}</strong>}
    </p>
  );
}
