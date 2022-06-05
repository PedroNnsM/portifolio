import Link from "next/link";
import style from "./Header.module.css";

const Header = () => {
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
					<div className={style.menu}>Menu</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
