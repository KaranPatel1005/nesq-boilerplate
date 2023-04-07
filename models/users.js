"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.trip_reviews, {
        foreignKey: "traveller_id",
      });
    }
  }
  users.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.STRING,
      otp: DataTypes.STRING,
      is_verified: DataTypes.BOOLEAN,
      profile_image: DataTypes.STRING,
      is_member: DataTypes.BOOLEAN,
      membership_expires_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "users",
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return users;
};
