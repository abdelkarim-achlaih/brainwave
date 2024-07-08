import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ children, onClick = () => {}, className, href }) => {
	const classes = `relative inline-flex h-10 px-4 items-center ${
		className || ""
	}`;
	return (
		<>
			{href ? (
				<a href={href} className={classes}>
					<span className="z-10">{children}</span>
					{ButtonSvg()}
				</a>
			) : (
				<button className={classes} onClick={onClick}>
					<span className="z-10">{children}</span>
					{ButtonSvg()}
				</button>
			)}
		</>
	);
};

export default Button;
