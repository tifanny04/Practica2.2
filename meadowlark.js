import express from 'express';
import {engine} from 'express-handlebars';
import dotenv from 'dotenv';
import path from 'path'; 
import { fileURLToPath} from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const imagenes = {
    'imagen1': {
        image: '/Imagnes/YAIW.webp',
        url : ''
    },
    'imagen2':{
        image: '/Imagnes/sweet.jpg',
        url : '' 
    },
    'imagen3':{
        image: '/Imagnes/k.jpg',
        url : '' 
    },
    'imagen4':{
        image: '/Imagnes/Touch.jpg',
        url : '' 
    },
    'imagen5':{
        image: '/Imagnes/NGHYB.jpg',
        url : '' 
    }
};

app.engine('handlebars', engine({
    defaultLayout: 'MAIN',
}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    const keys = Object.keys(imagenes);
    const randomkey = keys[Math.floor(Math.random() * keys.length)];
    const imagen = imagenes[randomkey];
    res.render('Tiff', {image: imagen.image, url: imagen.url})
});

app.get('/pag',(req,res)=>{
    res.render('body')
});

app.use((req,res) =>{   
    res.status(404)
    res.render('Error404')
});

app.use((req,res) =>{
    res.status(500)
    res.render('Error500')
});

app.listen(port, () =>{
    console.log("Listen exit!")
});