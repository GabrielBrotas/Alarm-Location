import React, { useContext, useEffect } from 'react';
import {View, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform} from 'react-native';
import { MapContext } from './mapContext';
import {Feather} from '@expo/vector-icons'

import Map from './components/Map'
import styles from './styles'
import Dropdown from './components/Dropdown';

function AlarmLocation() {
    
    const {metersRange, distanceBetweenPoints, setMetersRange, timeToReachPoint} = useContext(MapContext)

    useEffect( () => {
        if(metersRange >= distanceBetweenPoints) {
            console.log('despertar')
        } 
    }, [])

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.headerText}>Alarm Clock</Text>
            </View>

            <Map />

            <View style={styles.footer}>

                <Text style={styles.rangeInfo}>Info</Text>
                <View style={styles.rangeTextContent}>
                    <Text style={styles.rangeText}>{distanceBetweenPoints}  Metros</Text>
                    <Text style={styles.rangeText}>{timeToReachPoint}  Minutos</Text>
                </View>

                <Text style={styles.rangeInfo}>Config</Text>
                <View style={styles.rangeInputContent}>
                    
                    <View style={styles.inputContent}>
                        <TextInput 
                            keyboardType="numeric"
                            style={styles.rangeInput}
                            value={metersRange} 
                            onChangeText={(e) => { 
                                setMetersRange(e)
                            }}
                            placeholder="Distancia para despertar"
                        />
                        <View style={styles.rangeMetersContent}>
                            <Text style={styles.rangeMeters}>M</Text>
                        </View>
                    </View>
                    
                    <View style={styles.inputContent}>

                        <Dropdown />

                        <View style={styles.rangeMetersContent}>
                            <Feather name="move" size={18} color="#CBCFD4" />
                        </View>
                    </View>
                    
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default AlarmLocation