export let apiAddress;
    
if (process.env.NODE_ENV === 'productions') {
    apiAddress = 'https://pcb365-4.vercel.app'
} else {
    // apiAddress = 'http://127.0.0.1'
    // apiAddress = 'http://localhost:3000'
    apiAddress = 'https://pcb365-4.vercel.app'
}



