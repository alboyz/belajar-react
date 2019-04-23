import React from 'react';

const Top = () => {
		const HandlePesan = (value) => {
				alert("Halaman Top Tampil")
				alert (value)
		}
		return (
				<a href="/" onClick={()=>HandlePesan("Pesan Dari Top")}>Halaman Top</a>
		) 
}

export default Top;
