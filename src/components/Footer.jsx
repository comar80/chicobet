import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <nav>
                <ul>
                    <li><a href="https://github.com/comar80">© {currentYear} BabyBet</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;