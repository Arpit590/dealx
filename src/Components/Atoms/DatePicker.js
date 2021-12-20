import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'

import CalenderIcon from '../../../assets/icons/icons8-Date.svg'

export default (props) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
    <>
        <TouchableOpacity onPress={() => setOpen(true)}>
            <CalenderIcon/>
        </TouchableOpacity>
        <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={(date) => {
            setOpen(false)
            setDate(date)
        //   props.closePicker()
        }}
        onCancel={() => {
            setOpen(false)
        //   props.closePicker()
        }}
        
        />
    </>
)
}