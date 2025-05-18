const Footer = () => {
  return (
    <footer className="bg-slate-500 text-sm py-6 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">
            Movie <span className="text-emerald-500">Explorer</span>
          </span>
          . All rights reserved.
        </p>
        <p className="italic">
          Built by{" "}
          <a
            className="text-emerald-500 transition-all duration-200 cursor-pointer hover:text-emerald-600"
            href="https://github.com/FredH2O"
            target="_blank"
          >
            Frederico
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
