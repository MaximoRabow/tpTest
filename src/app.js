import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/productos', require('./routes/productos'));

app.get('/', (req, res)=>{
    res.send('TRABAJO EN DESARROLLO :)')
})

app.listen(8080, ()=> {
    console.log('escuchando 8080')
})


