import React from 'react';

const Top = () => {
		const HandlePesan = () => {
				alert("Halaman Top Tampil")
		}
		return (
				<a href="/" onClick={HandlePesan}>Halaman Top</a>
		) 
}

export default Top;
