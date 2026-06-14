function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-lg font-bold tracking-wider bg-gradient-to-r from-blue-400 via-sky-300 to-purple-500 bg-clip-text text-transparent font-sans">
          SreejithDev
        </h2>
        <p className="text-xs text-slate-500 font-mono">
          &copy; {new Date().getFullYear()} Sreejith U. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
