module.exports = (sequelize,DataTypes) =>{
    const Ads = sequelize.define("Ads",{
        Ads:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        desc:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        AdType:{
            type:DataTypes.STRING,
            allowNull : false,  
        },
        
        AdLink:{
            type:DataTypes.STRING,
            allowNull : false,  
        },
        status:{
            type:DataTypes.STRING,
            allowNull : false,
        }
       });
    return Ads;
};

