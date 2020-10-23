module.exports = function(sequelize, DataTypes) {
    var commentsList = sequelize.define("commentsList", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false
      },
    })
    return commentsList;
  }


    