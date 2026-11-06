function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,170,255,0.22),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(123,92,255,0.18),transparent_22%),radial-gradient(circle_at_20%_80%,rgba(0,222,187,0.12),transparent_24%),linear-gradient(180deg,#050816_0%,#070b18_38%,#03050e_100%)]" />
      <div className="absolute inset-x-0 top-[-12rem] h-[30rem] bg-[radial-gradient(circle,rgba(102,183,255,0.12),transparent_60%)] blur-3xl" />
      <div className="absolute right-[-8rem] top-[20rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(121,96,255,0.12),transparent_62%)] blur-3xl" />
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="noise absolute inset-0 opacity-[0.08]" />
    </div>
  );
}

export default AmbientBackground;
