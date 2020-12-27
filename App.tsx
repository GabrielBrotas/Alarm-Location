import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AlarmLocation from './src/index'
import { MapContext } from './src/mapContext';


export default function App() {

  const [metersRange, setMetersRange] = useState<number | null>();
  const [distanceBetweenPoints, setDistanceBetweenPoints] = useState<number>(0);
  const [timeToReachPoint, setTimeToReachPoint] = useState<number>(0)

  return (
    <MapContext.Provider value={{metersRange, setMetersRange, distanceBetweenPoints, setDistanceBetweenPoints, timeToReachPoint, setTimeToReachPoint}}>
      <AlarmLocation />
      <StatusBar style="auto" />
    </MapContext.Provider>
  );
}
