module.exports = (sequelize,DataTypes) =>{
    const AddReview = sequelize.define("AddReview",{
        filepath:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        
        desc:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        AddType:{
            type:DataTypes.STRING,
            allowNull : false,
        
        },
        
        AdLink:{
            type:DataTypes.STRING,
            allowNull : false,  
        },
        Status:{
            type:DataTypes.STRING,
            allowNull : false,
        }
       });
    return AddReview;
};

