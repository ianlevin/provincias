import {Router} from 'express';
import ProvinceService from './../services/province-service.js';
import Province from './../entities/province.js'
const router = Router();
const svc = new ProvinceService();

router.get('', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllSync();
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }
    else {
        respuesta = res.status(500).send('Error interno.');
    }
    return respuesta;
});

router.get('/:id', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getByIdSync(req.params.id);
    if(returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }else{
        respuesta = res.status(500).send('Error interno.');
    }
})

router.post('', async (req, res) => {
    let respuesta;
    let Provincia = new Province(0,req.body.name, req.body.full_name,req.body.latitude, req.body.longitude, req.body.display_order)
    const returnArray = await svc.CreateAsync(Provincia);
    if(returnArray == 1){
        respuesta = res.status(200).send('Se ha creado correctamente');
    }else{
        respuesta = res.status(500).send('Error interno.');
    }
})

router.put('', async (req, res) => {
    let respuesta;
    let Provincia = new Province(req.body.id,req.body.name, req.body.full_name,req.body.latitude, req.body.longitude, req.body.display_order)
    const returnArray = await svc.UpdateAsync(Provincia);
    if(returnArray == 1){
        respuesta = res.status(200).send('Se ha cambiado correctamente');
    }else{
        respuesta = res.status(500).send('Error interno.');
    }
})

router.delete('/:id', async (req, res) => {
    
})

export default router;