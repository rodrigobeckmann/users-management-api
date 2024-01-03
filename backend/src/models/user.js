const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    userPicture: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    fullAddress: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Users',
  });
  return User;
}

module.exports = UserModel;