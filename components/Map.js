import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import getCenter from 'geolib';


function Map({searchResults}) {
    const [ viewport, setViewport ] = useState( {
        width: '100%',
        height: '100%',
        latitude: 51.5098,
        longitude: -0.1180,
        zoom:11,
    } );
    
    

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/itsayush/ckt1de9m40wo818qs04g6dmyv'
            mapboxApiAccessToken={ process.env.mapbox_key }
            { ...viewport }
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

        </ReactMapGL>
    )
}

export default Map
