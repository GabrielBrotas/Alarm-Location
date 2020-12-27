import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle, MapEvent  } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { getCurrentPositionAsync, requestPermissionsAsync } from 'expo-location';
import { MapContext } from '../mapContext';
import {GOOGLE_API_KEY} from '../../variables'

import styles from './styles'

interface OnReadyProps {
  duration: number;
  distance: number;
}

function Map() {

  const {setDistanceBetweenPoints, metersRange, setTimeToReachPoint} = useContext(MapContext)

  const [currentLatitude, setCurrentLatitude] = useState<number | null>()
  const [currentLongitude, setCurrentLongitude] = useState<number | null>()

  const [destinyLatitude, setDestinyLatitude] = useState<number | null>()
  const [destinyLongitude, setDestinyLongitude] = useState<number | null>()

  useEffect( () => {

    async function loadInitialPosition() {
      const {granted} = await requestPermissionsAsync();

      if(granted) {
        const {coords} = await getCurrentPositionAsync()
        const {latitude, longitude} = coords
        setCurrentLatitude(latitude)
        setCurrentLongitude(longitude)
      }
    }
    loadInitialPosition()
  }, [])

  function handleSelectMapPosition(event: MapEvent) {
    setDestinyLatitude(event.nativeEvent.coordinate.latitude)
    setDestinyLongitude(event.nativeEvent.coordinate.longitude)
  }

  if(!currentLatitude || !currentLongitude) {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#000" />
    </View>  
  )} 

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        onPress={handleSelectMapPosition}
      >
        <Marker 
        coordinate={{
          latitude: currentLatitude,
          longitude: currentLongitude
        }} />

        {destinyLatitude && destinyLongitude && (
         <>
          <Marker 
          coordinate={{
            latitude: destinyLatitude,
            longitude: destinyLongitude
          }} />

          <Circle 
          center={{
            latitude: destinyLatitude,
            longitude: destinyLongitude
          }} 
          fillColor="rgba(161, 84, 242, 0.4)"
          radius={metersRange ? parseInt(metersRange) : 0}
          strokeColor="#3C444C"
          />
      
          <MapViewDirections 
            origin={{latitude: currentLatitude, longitude: currentLongitude}}
            destination={{latitude: destinyLatitude, longitude: destinyLongitude}}
            apikey={GOOGLE_API_KEY}
            mode='WALKING'
            strokeWidth={3}
            strokeColor="#A154F2"
            precision="high"
            onReady={({distance, duration}: OnReadyProps) => {
              setDistanceBetweenPoints(distance * 1000)
              setTimeToReachPoint(duration.toPrecision(3))
            }}
          />

          </>
        )}

      </MapView>
    </View>
  );
}

export default Map