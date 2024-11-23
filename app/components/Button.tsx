"use client";
import { useState } from "react";

export const Button = () => {
	const [count, setCount] = useState(0);

	const clickHandler = () => {
		setCount(count + 1);
	};

	return (
		<>
			<button onClick={clickHandler}>+</button>
			<div>{count}</div>
		</>
	);
};

export default Button;
