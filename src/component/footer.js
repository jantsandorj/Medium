function Footer() {
    const categ1 = [
      "Help",
      "Status",
      "Writers",
      "Blog",
      "Careers",
      "Privacy",
      "Terms",
      "About",
      "Text to Speech",
    ];
    return (
      <div className="d-flex gap-3 flex-wrap footSec">
        {categ1.map((l) => {
          return <p className="footer">{l}</p>;
        })}
      </div>
    );
  }
  export default Footer;