import React from 'react';
import { useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { MapContext } from '../../mapContext';

import pickerSelectStyles from './styles'

function Dropdown() {
    const {setTransport, transport} = useContext(MapContext)
    
    return (
        <RNPickerSelect
            style={pickerSelectStyles}
            value={transport}
            onValueChange={(value) => setTransport(value)}
            items={[
                { label: 'ANDANDO', value: 'WALKING' },
                { label: 'DIRIGINDO', value: 'DRIVING' },
                { label: 'CICLISMO', value: 'BICYCLING' },
                { label: 'TRANSITO', value: 'TRANSIT' }
            ]}
        />
    );
};

export default Dropdown