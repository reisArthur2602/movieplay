import React from 'react';

export const Container = ({ children }) => {
	return (
		<div className="max-w-[1200px] w-full mx-auto flex flex-col sm:px-[1.875rem] ">
			{children}
		</div>
	);
};
