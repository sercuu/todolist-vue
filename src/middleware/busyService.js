import { actionShouldBlock, actionFinished,actionStarted } from '../store/modules/busy/utils'

export default function createBusyService() {
    return store => {
        store.subscribe(mutation => {

            if (actionShouldBlock(mutation.payload && mutation.payload.meta)) {
                console.log('metavarmi?')
            }
            if (actionStarted(mutation.type)) {
                store.commit('increaseBusy')
            } 
            if (actionFinished(mutation.type)) {
                store.commit('decreaseBusy')
            } 
        });
        
    }
  }