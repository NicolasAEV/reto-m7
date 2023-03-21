import express from 'express';
const router = express.Router();
import {getAllCountrys,deleteCountry,addCountry,order,orderBy,orderByYear} from '../controllers/views.controllers.js'

router.get('/',getAllCountrys,(req,res)=>{})

router.post('/paises',addCountry,(req,res)=>{
}).delete('/paises/:nombre',deleteCountry , (req,res)=>{})

router.get('/ordenar',order,(req,res)=>{})
router.get('/ordenar/:orden',orderBy,(req,res)=>{})
router.post('/ordenar/by',orderByYear,(req,res)=>{})



export default router;