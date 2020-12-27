import React, { useContext, useEffect, useState } from 'react';
import {View, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Alert} from 'react-native';
import { MapContext } from './mapContext';
import {Feather} from '@expo/vector-icons'
import {Audio} from 'expo-av'

import Map from './components/Map'
import styles from './styles'
import Dropdown from './components/Dropdown';
import { convertTimeToMinutes } from './utils/convertTimeToMinutes';

function AlarmLocation() {
    
    const {metersRange, distanceBetweenPoints, setMetersRange, timeToReachPoint} = useContext(MapContext)
    
    const [music, setMusic] = useState(require('./musics/birds.mp3'))
    const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false)


    useEffect( () => {

        if((metersRange && distanceBetweenPoints) && (metersRange > 0)) {
            if((metersRange > distanceBetweenPoints) && !isPlayingMusic) {
                playSound();
            }
        }
    
        return () => {
            setIsPlayingMusic(false)
        }
    }, [metersRange, distanceBetweenPoints])

    async function playSound() {
        const {sound} = await Audio.Sound.createAsync(music)
        
        if(!isPlayingMusic) {
            setIsPlayingMusic(true)
            sound.playAsync();
            Alert.alert(
                "Distancia atingida",
                `Você está a ${distanceBetweenPoints}m de seu destino.`,
                [
                    {
                        text: "Parar",
                        onPress: () =>  {
                            sound.unloadAsync()
                            setIsPlayingMusic(false)
                        },
                        style: 'destructive'
                    }
                ]
            )
        }
    }

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

            <View style={{flex: 5}}>
                <Map />
            </View>

            <View style={styles.footer}>

                <Text style={styles.rangeInfo}>Info</Text>
                <View style={styles.rangeTextContent}>
                    <Text style={styles.rangeText}>{distanceBetweenPoints}  Metros</Text>
                    <Text style={styles.rangeText}>{convertTimeToMinutes(timeToReachPoint)}</Text>
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