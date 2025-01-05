const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autoSales', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brandName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modelId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modelName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    horsePower: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currency: {
      type: DataTypes.ENUM('AZN','USD','EUR'),
      allowNull: true,
      defaultValue: "AZN"
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fuelTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seatCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    colorId: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    transmissionType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    isUrgent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isWhatsappActive: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isOriginalMileage: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cityId: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    engineSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasCasgo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    barter: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    viewsCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    renewedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bodyStyleId: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    wheelDriveType: {
      type: DataTypes.ENUM('front','rear','full'),
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'autoSales',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
