module.exports = (sequelize,DataTypes) =>{
    const Profile = sequelize.define("Profile",{
        Image:{
            type:DataTypes.STRING,
            allowNull : false,
        }
       });
    return Profile;
};

