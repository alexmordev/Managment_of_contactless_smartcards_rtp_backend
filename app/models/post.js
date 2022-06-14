'use strict';

module.exports = (sequelize, DataTypes) => {

  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    tableName: "posts"
  });

  post.associate = (models) => {
    post.belongsTo(models.user, { as: "author", foreignKey: "userId" })
  };
  return post;
};