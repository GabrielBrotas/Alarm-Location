function checkAndTransformToTwoNumbers(number: number | string) {
    
    let numberFormated: number | string = ''
    
    if(number.toString().length === 1) {
        numberFormated = `0${number}`
    }  else {
        numberFormated = number
    }

    return numberFormated
}

export function convertTimeToMinutes(time: number) {

    let hours: number | string = '00';
    let minutes: number | string = parseInt(time.toString().split('.')[0]);
    let rest: number | string = parseInt(time.toString().split('.')[1]);
    let timeFormated: string = '';

    if(minutes >= 60) {
        hours = Math.floor(minutes / 60);
        minutes = minutes - (60 * hours)
    }

    if( rest >= 60) {
        let seconds: number | string = rest - 60
        let minutesLeft = Math.ceil((rest - 60) / 60)
        let minutesTotal: string | number = minutes + minutesLeft

        let minutesFormated = checkAndTransformToTwoNumbers(minutesTotal)
        let secondsFormated = checkAndTransformToTwoNumbers(seconds)
        let hoursFormated = checkAndTransformToTwoNumbers(hours)

        timeFormated = `${hoursFormated}:${minutesFormated}:${secondsFormated ? secondsFormated : '00'}`
    } else {

        let minutesFormated = checkAndTransformToTwoNumbers(minutes) 
        let restFormated = checkAndTransformToTwoNumbers(rest) 
        let hoursFormated = checkAndTransformToTwoNumbers(hours)

        timeFormated = `${hoursFormated}:${minutesFormated ? minutesFormated : '00'}:${restFormated ? restFormated : '00'}`
    } 

    return timeFormated 
}

