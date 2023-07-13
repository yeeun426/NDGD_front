import React, { useEffect } from 'react';
import jobData from "../data/JobInstitutionData.json"

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(36.3, 127.5),
			level: 12
		};
        const map = new kakao.maps.Map(container, options);

        jobData.job.forEach((el) => {
            new kakao.maps.Marker({
                map: map,
                position : new kakao.maps.LatLng(el.lat, el.lng),
            })
        })
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
 