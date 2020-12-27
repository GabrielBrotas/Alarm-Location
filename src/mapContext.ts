import {createContext} from 'react'

interface MapContextProps {
    metersRange?: number;
    setMetersRange?: React.Dispatch<React.SetStateAction<number>>;
    distanceBetweenPoints?: number;
    setDistanceBetweenPoints?: React.Dispatch<React.SetStateAction<number>>
}

export const MapContext = createContext<any>({})