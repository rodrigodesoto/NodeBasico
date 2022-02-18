const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env){
        case 'dev':
            return{
                bd_string: 'mongodb+srv://Soto:Mongo77*@clusterapi.so1qf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'batata',
                jwt_expires_in: '7d'
            }
        case 'hml':
            return{
                bd_string: 'mongodb+srv://Soto:Mongo77*@clusterapi.so1qf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'batata',
                jwt_expires_in: '7d'
            }
        case 'prod':
            return{
                bd_string: 'mongodb+srv://Soto:Mongo77*@clusterapi.so1qf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'batata',
                jwt_expires_in: '7d'
            }
    }
}

console.log(`Iniciando a API em ambiente de ${env.toUpperCase()}`)

module.exports = config();