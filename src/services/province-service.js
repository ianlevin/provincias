import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService{
    getAllSync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllSync();
        return returnArray;
    }
    
    getByIdSync = async (id) => {
        const repo = new ProvinceRepository();
        const objeto = await repo.GetByIdAsync();
        return objeto;
    }
    createAsync = async (entity) => {
        const repo = new ProvinceRepository();
        const objeto = await repo.CreateAsync();
        return objeto;
    }
    updateAsync = async (entity) => {
        const repo = new ProvinceRepository();
        const objeto = await repo.UpdateAsync();
        return objeto;
    }
    deleteByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const objeto = await repo.DeleteByIdAsync();
        return objeto;
    }
}