import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import CounterReducer from './CounterReducer'

const CounterStore = configureStore({
    reducer:{
        counter:CounterReducer
    }
})

export default CounterStore
