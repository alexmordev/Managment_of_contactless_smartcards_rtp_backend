'use strict';

module.exports = (sequelize, DataTypes) => {

  const contadores_sam = sequelize.define('contadores_sam', {
    ns_tarjeta: DataTypes.STRING,
    environment_log: DataTypes.STRING,
    events_log: DataTypes.STRING,
    contracts_log: DataTypes.STRING,
    load_log: DataTypes.STRING,
    fecha_hora: DataTypes.DATE,
    folio: DataTypes.STRING
  }, {
    tableName: "contadores_sam"
  });

  contadores_sam.associate = (models) => {
   
  };
  return contadores_sam;
};