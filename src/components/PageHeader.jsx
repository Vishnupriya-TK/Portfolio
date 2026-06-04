const PageHeader = ({ title, subtitle, className = "" }) => (
  <header className={`text-center mb-10 sm:mb-14 ${className}`}>
    <h1 className="page-title">{title}</h1>
    {subtitle && <p className="page-subtitle mt-3 max-w-2xl mx-auto">{subtitle}</p>}
  </header>
);

export default PageHeader;
