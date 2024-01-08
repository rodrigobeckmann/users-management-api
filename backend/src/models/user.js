const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
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
    telephone: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    userHasPicture: {
      type: DataTypes.BOOLEAN,
      allowNull:true,
    },
    userPicture: {
      type: DataTypes.VIRTUAL,
      get() {
        if (this.userHasPicture === true) {
          return `${process.env.BACKEND_URL}/usersPictures/${this.id}.jpeg`;
        } else {
          return `${process.env.BACKEND_URL}/usersPictures/unknown.jpeg`;
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    addressNumber: {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    country: {
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