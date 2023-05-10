  import React from 'react';

  function Footer() {
    return (
      <footer className="bg-accenta max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div>Copyright © {new Date().getFullYear()}</div>
        <div>Chris Fernandez </div>
        <div>
        <a target="_blank" href="https://icons8.com/icon/65471/mountain"> Mountains</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
      </footer>
    );
  }

  export default Footer;


