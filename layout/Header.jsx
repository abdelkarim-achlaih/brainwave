import React from "react";
import { brainwave } from "../src/assets";
import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Button from "../src/Components/Button";
import { HamburgerMenu } from "../src/Components/Design/Header";
import MenuSvg from "../src/assets/svg/MenuSvg";

const Header = () => {
	const [openNavigation, setOpenNavigation] = React.useState(false);

	const links = ["features", "pricing", "how to use", "roadmap"];

	const RenderedDesktopLinks = links.map((link) => (
		<li key={link}>
			<a
				href={`#${link}`}
				className="uppercase text-xs font-bold hover:text-n-1 transition"
			>
				{link}
			</a>
		</li>
	));

	const RenderedMobileLinks = links.map((link) => (
		<li key={link}>
			<a
				onClick={() => setOpenNavigation(false)}
				href={`#${link}`}
				className="uppercase text-lg font-bold hover:text-color-5 transition"
			>
				{link}
			</a>
		</li>
	));

	return (
		<header className="py-4 text-n-4 border-n-13 border-b sticky top-0">
			<ButtonGradient />
			<div className="h-screen lg:h-auto flex flex-col lg:flex-row lg:gap-16 container items-center">
				<div className="w-full lg:w-auto flex justify-between">
					<a href="#">
						<img src={brainwave} alt="" />
					</a>
					<div className="lg:hidden">
						<Button onClick={() => setOpenNavigation((prev) => !prev)}>
							<MenuSvg openNavigation={openNavigation} />
						</Button>
					</div>
				</div>
				<nav className="grow hidden lg:block">
					<ul className="flex justify-center gap-4 lg:gap-8 xl:gap-20">
						{RenderedDesktopLinks}
					</ul>
				</nav>
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-4 lg:gap-8 xl:gap-20">
						<li>
							<a
								href=""
								className="uppercase text-xs font-bold hover:text-n-1 transition"
							>
								new account
							</a>
						</li>
						<li>
							<Button href="#" className="group">
								<span className="uppercase text-xs font-bold group-hover:text-color-5 transition">
									sign in
								</span>
							</Button>
						</li>
					</ul>
				</nav>
				{openNavigation && (
					<div className="lg:hidden relative grow w-full overflow-hidden flex flex-col justify-center">
						<HamburgerMenu />
						<nav>
							<ul className="pt-8 flex flex-col gap-16 items-center ">
								{RenderedMobileLinks}
							</ul>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
