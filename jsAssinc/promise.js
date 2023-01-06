let accept = true

console.log('pedir pizza') 

const promise = new Promise((resolve, reject) => {
	if (accept) {
		return resolve('pedido aceito!')
    }
    return reject('pedido negado!')
})
console.log('aguardando')
promise.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('finalizada'))