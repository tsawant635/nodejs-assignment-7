
const mongoose = require('mongoose');
const port = 3000
const app = require('./app');
//mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// mongoose.connection.once('open', () =>{
//     console.log('connection established')
// }).on('connectionError',(err) =>{
//     console.log(err);
// })

mongoose.connect("mongodb://localhost:27017/testaroo", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("connection is establised")})
.catch((e)=>{console.log("error")})

app.listen(port, () => console.log(`App listening on port ${port}!`));