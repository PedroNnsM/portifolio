import Link from "next/link";
import style from "./Header.module.css";
import { useState } from "react";

const Header = () => {
	const [menu, setMenu] = useState(false);
	return (
		<header className={style.header}>
			<nav className={style.navbar}>
				<div className={style.maxWidth}>
					<div className={style.logo}>
						<Link href="/">
							<a>Pedro.DEV</a>
						</Link>
					</div>
					<div className={style.menu}>
						<Link href="/">
							<a>Home</a>
						</Link>
						<Link href="/about">
							<a>About</a>
						</Link>
					</div>
					<div className={style.menuBtn} onClick={setMenu}>Menu</div>
					{menu ? (
						<div className={style.menuList}>
							<h2 onClick={() => setMenu(!menu)}>X</h2>
							<Link href="/">
								<a>Home</a>
							</Link>
							<Link href="/about">
								<a>About</a>
							</Link>
						</div>
					) : null}
				</div>
			</nav>
		</header>
	);
};
	
export default Header;
