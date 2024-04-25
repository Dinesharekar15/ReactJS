import {configureStore} from '@reduxjs/toolkit'
import todoreducer from './slice'
 
export const store=configureStore({
     reducer:todoreducer
})