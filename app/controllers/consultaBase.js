const { sequelize } = require('../models/index');
const { contadores } = require('../models/index')
const { sam_card } = require('../models/index')

const getConsulta = async(req,res) => {

    const conta =  await sequelize.query('SELECT * FROM contadores', {
        model: contadores,
        mapToModel: true // si tiene cambios asignados es true

      });
    //   console.table({conta})
    res.send(conta);
}

const consultSam = async(req,res) => {

    const sams =  await sequelize.query('SELECT * FROM sam_cards', {
        model: sam_card,
        mapToModel: true // si tiene cambios asignados es true

      });
    
      res.send({sams});
    //   console.table(sams)
}

module.exports = {
    getConsulta,
    consultSam
}