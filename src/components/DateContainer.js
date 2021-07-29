import {useEffect, useState} from 'react'

// Format Hours
const hoursFormat = (today) => {
    if (today.getHours() === 0) {
        return '12'
    } else {
        return today.getHours() % 12;
    }
}
    

// Format Minutes
const minsFormat = (today) => {
    if (today.getMinutes() < 10) {
        return '0' +  today.getMinutes();
    } else {
        return today.getMinutes();
    }
}

// Time Am/PM
const timeEnd = (today) => {
    if (today.getHours() > 12) {
        return 'PM'
    } else {
        return 'AM'
    }
}

// Make the timeStr
const timeStr = () => {
    let today = new Date();
    return hoursFormat(today) + ':' + minsFormat(today) + ' ' + timeEnd(today) + ' ' + today.getSeconds();
}

// Get Date
const dateStr = () => {
    let today = new Date();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
    return months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

}

// Get Day
const dayStr = () => {
    let today = new Date();
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    return days[today.getDay()-1];
}

const DateContainer = () => {
    const [timeValue, setTimeValue] = useState(timeStr());
    const [dateValue, setDateValue] = useState(dateStr());
    const [dayValue, setDayValue] = useState(dayStr());

    useEffect(() => {
        const polling = setTimeout(() => {
            setTimeValue(timeStr());
            setDateValue(dateStr());
            setDayValue(dayStr());
            
        }, 1000);

        return () => clearTimeout(polling);
    },[timeValue, dateValue, dayValue]);

    return (
             <div className='date-container'>
                <h1 className='time-output'>{timeValue}</h1>
                <h2 className='day-output'>{dayValue}</h2>
                <h2 className='date-output'>{dateValue}</h2>
            </div>
    )
}

export default DateContainer
