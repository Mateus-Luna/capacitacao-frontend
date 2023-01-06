const promise = new Promise (function(resolve, reject){
    return resolve();
})

async function start(){
    try {
        const result = await promise
        console.log(result)
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("always load")
    }
}

start();