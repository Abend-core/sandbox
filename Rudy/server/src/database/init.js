const mariadb = require('./db')
const dataModule = require('./data/module')
const Module = require('../models/module')

if(port = 5000){
    mariadb
    .sync({force: true})
    .then(_ => {
        
        dataModule.map(module => {
            Module.create(module)
        })
        console.log('Synchronisation effectué !')
    })
    .catch((err) =>{
        console.log(err)
    })
}else{
    mariadb
    .sync()
    .then(_ => {
        
        dataModule.map(module => {
            Module.create(module)
        })
        console.log('Synchronisation effectué !')
    })
    .catch((err) =>{
        console.log(err)
    })
}



