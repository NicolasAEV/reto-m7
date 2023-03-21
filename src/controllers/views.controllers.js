import pool from '../db/db.js'
export const getAllCountrys = async (req,res) =>{
   let paises = await pool.query('SELECT nombre, pib_2019 , pib_2020, abs(pib_2019 - pib_2020) as diferencia FROM paises_pib')
    res.render('inicio',{
        title:'inicio',
        paises : paises.rows
    })
}
export const addCountry = async (req,res)=>{
    try {
        console.log(req.body)
        let {nombre , pib_2019 , pib_2020} = req.body
        let pais = await pool.query(`INSERT INTO paises_pib (nombre , pib_2019 , pib_2020) VALUES($1,$2,$3)`,[nombre , pib_2019 , pib_2020])
        res.status(200).json({code : 200 , message : "pais creado exitosamente"})
    } catch (error) {
        console.log(error)
        res.status(500).json({code : 500 , message : "ocurrio un error al intentar agregar un pais el pais"})
    }
}
export const deleteCountry = async (req,res) =>{ 
    try {
        let {nombre} = req.params
        console.log(nombre)
        let pais =  await pool.query(`DELETE FROM paises_pib WHERE nombre = $1`,[nombre])
        res.status(200).json({code : 200 , message : "pais eliminado exitosamente"})
    } catch (error) {
        res.status(500).json({code : 500 , message : "ocurrio un error al intentar eliminar el pais"})
    }
  
}

export const order = async (req,res) =>{

    let paises = await pool.query('SELECT nombre, pib_2019 , pib_2020, abs(pib_2019 - pib_2020) as diferencia FROM paises_pib')
    res.render('ordenar',{
        title : "ordenar",
        paises : paises.rows
    })
}

export const orderBy = async (req,res) =>{
    let {orden} = req.params
    let paises = await pool.query(`SELECT nombre, pib_2019 , pib_2020, abs(pib_2019 - pib_2020) as diferencia FROM paises_pib ORDER BY diferencia ${orden}`)
    res.render('ordenar',{
        title : "ordenar",
        paises : paises.rows
    })
}

export const orderByYear = async (req,res) =>{
        let {pib2020} = req.body
        pib2020 =parseInt(pib2020)
        let paises = await pool.query(`SELECT nombre, pib_2019 , pib_2020, abs(pib_2019 - pib_2020) as diferencia FROM paises_pib WHERE pib_2020 > ${pib2020}`)
        res.render('ordenar',{
            title : "ordenar",
            paises : paises.rows
        })
}