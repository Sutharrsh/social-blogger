const AddReview = require("./AddReview");

module.exports = (sequelize,DataTypes) =>{
    const Sponser = sequelize.define("Sponser",{
        username:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        
        address:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        
        business:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        website:{
            type:DataTypes.STRING,
            allowNull:false,
        }


       });
        
   Sponser.associate = (models)=>{
    Sponser.hasMany(models.AddReview,{
        onDelete : "cascade",
    }),
    Sponser.hasMany(models.Ads,{
        onDelete : "cascade",
    })
      
    };
    return Sponser;
};

