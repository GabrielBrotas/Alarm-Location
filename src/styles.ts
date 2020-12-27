import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#3c444d',
    },
    header: {
        width: '100%',
        height: 70,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        lineHeight: 25,
        fontWeight: 'bold',

        color: "#A154F2"
    },
    footer: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3c444d',
    },
    rangeTextContent: {
        flex: 2,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rangeText: {
        color: "#A154F2",
        fontSize: 30
    },
    rangeInputContent: {
        flex: 3
    },
    inputContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    rangeInput: {
        height: 50,
        width: 200,
        backgroundColor: "#fff",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 10,
        color: "#747D88" 
    },
    rangeMetersContent: {
        height: 50,
        width: 50,
        backgroundColor: "#747D88",
        
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rangeMeters: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#CBCFD4"
    }
})

export default styles