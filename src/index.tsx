import React, { useContext } from 'react';
import {View, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform} from 'react-native';
import { MapContext } from './mapContext';

import Map from './components/Map'
import styles from './styles'
import Dropdown from './components/Dropdown';

function AlarmLocation() {
    
    const {metersRange, distanceBetweenPoints, setMetersRange, timeToReachPoint} = useContext(MapContext)

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
                <View style={styles.rangeTextContent}>
                    <Text style={styles.rangeText}>{distanceBetweenPoints}  Metros</Text>
                    <Text style={styles.rangeText}>{timeToReachPoint}  Minutos</Text>
                </View>

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
                            <Text style={styles.rangeMeters}>M</Text>
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