module.exports = (sequelize,DataTypes) =>{
    const PureScience = sequelize.define("PureScience",{
        fieldname:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        shortdescription:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        imglink:{
            type:DataTypes.STRING,
            allowNull:true,    
        },
        
        imglink_one:{
            type:DataTypes.STRING,
            allowNull:true,    
        },
        
        imglink_two:{
            type:DataTypes.STRING,
            allowNull:true,    
        },
        videolink:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        
        videolink_one:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        colleges:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        job:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        parent_category:{
            type:DataTypes.STRING,
            allowNull:true,
        
        },
        courses:{
            type:DataTypes.STRING,
            allowNull:false,       
        }

       });
    return PureScience;
};

