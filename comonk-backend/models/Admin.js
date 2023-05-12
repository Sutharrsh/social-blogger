module.exports = (sequelize,DataTypes) =>{
    const Admin = sequelize.define("Admin",{
        username:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull : false,
        },
     
    });
       
   Admin.associate = (models)=>{
    Admin.hasMany(models.Demo,{
        onDelete : "cascade",
    })
    };
    
    return Admin;
};