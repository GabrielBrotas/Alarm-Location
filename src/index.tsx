import React, { useContext, useEffect } from 'react';
import {View, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, ToolbarAndroidBase} from 'react-native';
import Map from './Map'
import { MapContext } from './mapContext';

import styles from './styles'

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
                    <Text style={styles.rangeInputText}>Metros</Text>
                    <View style={styles.inputContent}>
                        <TextInput 
                            keyboardType="numeric"
                            style={styles.rangeInput}
                            value={metersRange} 
                            onChangeText={(e) => { 
                                setMetersRange(e)
                            }}
                        />
                        <View style={styles.rangeMetersContent}>
                            <Text style={styles.rangeMeters}>M</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.rangeInputSubText}>Distancia para o alarme despertar</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default AlarmLocation