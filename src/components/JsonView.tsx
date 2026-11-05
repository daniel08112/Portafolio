import type { ReactNode } from 'react';

export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

const isPrimitive = (v: JsonValue) => v === null || typeof v !== 'object';

function primitive(v: JsonValue, key?: string): ReactNode {
  if (typeof v === 'string') return <span className="s" key={key}>"{v}"</span>;
  return <span className="bo" key={key}>{String(v)}</span>;
}

/** Pinta un objeto JSON con colores. Las listas de valores simples quedan en una sola línea. */
function render(value: JsonValue, indent: number): ReactNode {
  const pad = '  '.repeat(indent);
  const padIn = '  '.repeat(indent + 1);

  if (isPrimitive(value)) return primitive(value);

  if (Array.isArray(value)) {
    if (value.every(isPrimitive)) {
      return (
        <>
          [
          {value.map((v, i) => (
            <span key={i}>
              {primitive(v)}
              {i < value.length - 1 ? ', ' : ''}
            </span>
          ))}
          ]
        </>
      );
    }
    return (
      <>
        [{'\n'}
        {value.map((v, i) => (
          <span key={i}>
            {padIn}
            {render(v, indent + 1)}
            {i < value.length - 1 ? ',' : ''}
            {'\n'}
          </span>
        ))}
        {pad}]
      </>
    );
  }

  const entries = Object.entries(value);
  return (
    <>
      {'{'}
      {'\n'}
      {entries.map(([k, v], i) => (
        <span key={k}>
          {padIn}
          <span className="k">"{k}"</span>: {render(v, indent + 1)}
          {i < entries.length - 1 ? ',' : ''}
          {'\n'}
        </span>
      ))}
      {pad}
      {'}'}
    </>
  );
}

export function JsonView({ value, label }: { value: JsonValue; label: string }) {
  return <pre aria-label={label}>{render(value, 0)}</pre>;
}
