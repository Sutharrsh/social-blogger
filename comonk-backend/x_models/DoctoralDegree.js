module.exports = (sequelize,DataTypes) =>{
    const DoctoralDegree = sequelize.define("DoctoralDegree",{
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
        syllabus:{
            type:DataTypes.STRING,
            allowNull:true,
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
        salary:{
            type:DataTypes.STRING,
            allowNull:true,
        
        },
        courses:{
            type:DataTypes.STRING,
            allowNull:false,       
        },
        
        coursefees:{
            type:DataTypes.STRING,
            allowNull:false,       
        }
       });
    return DoctoralDegree;
};

