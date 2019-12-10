import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';

class Map extends React.Component {
    render(){        
        return(
            <div className={'map'}>
                <ReactBingmaps 
                    bingmapKey='Arr_dbRpvVr2HnKCMLX_1BFgv3Jy4HTyMnZ8_9kNwTLhhoxfFYdq4_R8B2klClIG'
                    center={[54.73695, 25.21741]}
                    zoom={15}
                    pushPins={[{
                        'location': [54.73695, 25.21741],
                        'option': {color: 'black'}
                    }]}
                    infoboxes={[{
                        'location': [54.73695, 25.21741],
                        'option': {
                            title: 'UAB Remonto Technologijos',
                            description: "<img src='/media/shop-small.jpg' width='230px' alt='Parduotuvės nuotrauka' />",
                            maxHeight: 400,
                        }
                    }]}
                    
                >

                </ReactBingmaps>
            </div>
        )
    }
}

export default Map;