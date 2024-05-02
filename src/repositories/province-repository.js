import DBConfig from './configs/db-config.js';
import pkg from 'pg'
const {Client} = pkg 

export default class ProvinceRepository {
    GetAllAsync = async () => {
        let returnArray = null
        const client = new Client(DBConfig)
        try{
            await client.connect()
            const sql = 'SELECT * FROM Provinces'
            const result = await client.query(sql)
            await client.end()
            returnArray = result.rows
        } catch (error){
            console.log(error)
        }
        return returnArray;
    }
    GetByIdAsync = async (id) => {
        let objeto = null
        const client = new Client(DBConfig)
        try{
            await client.connect()
            const sql = 'SELECT * FROM Provinces WHERE ProvinciaId = $id'
            const values = [id]

            const result = await client.query(sql, values)
            await client.end()
            objeto = result.rows
        }catch (error){
            console.log(error)
        }
        return objeto;
    }
    CreateAsync = async (entity) => {
        let objeto = null
        const client = new Client(DBConfig)
        try{
            await client.connect()
            const sql = 'INSERT into Provinces'
            const values = [id]

            const result = await client.query(sql, values)
            await client.end()
            objeto = result.rows
        }catch (error){
            console.log(error)
        }
        return objeto;
    }
    UpdateAsync = async (entity) => {

    }
    DeleteByIdAsync = async (id) => {

    }

}