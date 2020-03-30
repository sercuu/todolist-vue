export default function createApiService () {
    return store => {
        store.subscribe(mutation => {
            console.log(mutation, 'APImutation')
        });
        
    }
  }