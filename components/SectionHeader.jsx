import React from 'react'

function SectionHeader({ children }) {
	return (
		<div>
			<h1 className='text-4xl py-10 text-center font-medium'>{children}</h1>
		</div>
	)
}

export default SectionHeader
