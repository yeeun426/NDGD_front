import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(37, 127.5),
			level: 12
		};
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div id='myMap' style={{
            width: '80%', 
            height: '100vh',
            margin: '50px auto'
        }}></div>
    );
}

export default MapContainer; 
 