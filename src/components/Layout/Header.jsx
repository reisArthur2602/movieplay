import React from 'react';
import { Logo } from '../Logo';
import { NavLink } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';

export const Header = () => {
	return (
		<>
			<header className="flex justify-between py-[4.0313rem] items-center">
				{/* logo */}
				<NavLink to="/">
					<Logo />
				</NavLink>
				
				{/* favoritos */}

				<NavLink
					className="rounded-full border-2 border-solid border-bluegray--700 py-4 px-5 flex items-center gap-2 text-bluegray--600 text-xl font-bold hover:animate-pulse"
					to="/filme"
				>
					<HiOutlineHeart size={22} />
					Favoritos
				</NavLink>
			</header>
		</>
	);
};
