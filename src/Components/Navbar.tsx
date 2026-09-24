function Navbar() {
  return (
    <div className="flex justify-between items-center px-12 py-4 bg-background text-white sticky top-0 z-2">
      <h2 className="font-semibold text-xl">
        <a href="#hero">Arpit Kaushik</a>
      </h2>
      <ul className="flex gap-20">
        <a href="#what-i-do" className="cursor-default">
          WHAT I DO
        </a>
        <a href="#skills" className="cursor-default">
          SKILLS
        </a>
        <a href="#projects" className="cursor-default">
          PROJECTS
        </a>
        <li className="cursor-pointer">
          <a href="/Arpit_Kaushik_Resume.pdf" download={true}>
            RESUME
          </a>
        </li>
      </ul>
      <a href="#contact-me" className="bg-red-500 py-2 px-4 rounded-md">
        Hire Me
      </a>
    </div>
  );
}

export default Navbar;
