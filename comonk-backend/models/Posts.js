module.exports = (sequelize,DataTypes) =>{
    const Posts = sequelize.define("Posts",{
        title:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        postText:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        postImage:{
            type:DataTypes.STRING,
            allowNull:true
        },
        
        postBodyOne:{
            type:DataTypes.STRING,
            allowNull:true
        },
        
        postBodyTwo:{
            type:DataTypes.STRING,
            allowNull:true
        },
        
        postBodyThree:{
            type:DataTypes.STRING,
            allowNull:true
        },     
        videoLink:{
            type:DataTypes.STRING,
            allowNull:true
        },
        videoLinkTwo:{
            type:DataTypes.STRING,
            allowNull:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull : false,
        }
    });
    Posts.associate = (models)=>{
        Posts.hasMany(models.Comments,{
            onDelete : "cascade",
        });
        Posts.hasMany(models.Likes,{
            onDelete : "cascade",
        });
       
    };
    
    return Posts;
};