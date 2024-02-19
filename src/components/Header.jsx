import React from 'react';
import { Logo } from './Logo';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';
import { Button } from './Button';

export const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<header className="flex justify-between py-[4.0313rem] items-center md:flex-col md:gap-8 md:pb-0 ">
				{/* logo */}
				<NavLink to="/">
					<Logo />
				</NavLink>

				{/* favoritos */}
				<Button handle={() => navigate('/favoritos')}>
					<HiOutlineHeart size={22} />
					Favoritos
				</Button>
			</header>
		</>
	);
};
