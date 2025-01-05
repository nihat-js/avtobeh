const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: "User_email_key"
    },
    password: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    balance: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    stars: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    lastLoginTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastLoginIpAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    listingCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "User_email_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
