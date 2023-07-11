import React from 'react'

function Navbar() {
  return (
    <nav className="p-10 bg-black text-white">
        <ul className="flex gap-5">
            <li className="flex mr-auto">
                <h1 className="text-3xl">Stephen Ni</h1>
                <button type="checkbox">Dark/Light</button>
            </li>
            <li>
                <a href="#Hero">
                    Home
                </a>
            </li>
            <li>
                <a href="#Projects">
                    Projects
                </a>
            </li>
            <li>
                <a href="#About">
                    About
                </a>
            </li>
            <li>
                <a href="#Contact">
                    Contact
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/stephen-ni-991b1b265/">
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com/Stepty">
                    GitHub
                </a>
            </li>
            <li>
                <button>Resume</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar