function Navbar() {
  return (
    <div className="flex justify-between items-center px-12 py-4 bg-background text-white sticky top-0 z-2">
      <h2 className="font-semibold text-xl">
        <a href="#hero" className="cursor-default">
          Arpit Kaushik
        </a>
      </h2>
      <ul className="flex gap-20">
        <a
          href="#what-i-do"
          className="hover:border-2 hover:border-orange-700 p-2"
        >
          WHAT I DO
        </a>
        <a
          href="#skills"
          className="hover:border-2 hover:border-orange-700 p-2"
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="hover:border-2 hover:border-orange-700 p-2"
        >
          PROJECTS
        </a>
        <li className="cursor-pointer hover:border-2 hover:border-orange-700 p-2">
          <a href="/Arpit_Kaushik_Resume.pdf" target="_blank">
            RESUME
          </a>
        </li>
      </ul>
      <a
        href="#contact-me"
        className="bg-red-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-black hover:scale-110"
      >
        Hire Me
      </a>
    </div>
  );
}

export default Navbar;
