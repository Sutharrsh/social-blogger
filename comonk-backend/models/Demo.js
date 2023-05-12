module.exports = (sequelize,DataTypes) =>{
    const Demo = sequelize.define("Demo",{
        Image:{
            type:DataTypes.STRING,
            allowNull : false,
        },
       });
    return Demo;
};

