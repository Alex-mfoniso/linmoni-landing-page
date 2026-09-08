export function Logo({ linked = true }: { linked?: boolean }) {
  const wordmark = <><span>lin</span><i>moni</i><b>•</b></>;
  return linked
    ? <a className="logo" href="#top" aria-label="Linmoni home">{wordmark}</a>
    : <span className="logo" aria-label="Linmoni">{wordmark}</span>;
}
