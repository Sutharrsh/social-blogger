module.exports = (sequelize,DataTypes) =>{
    const Bio = sequelize.define("Bio",{
        Bio:{
            type:DataTypes.STRING,
            allowNull : false,
        },
       });
    return Bio;
};

