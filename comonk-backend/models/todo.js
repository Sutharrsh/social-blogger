module.exports = (sequelize,DataTypes) =>{
    const todo = sequelize.define("todos",{
        Task:{
            type:DataTypes.STRING,
            allowNull : false,
        },
    });
   
    return todo;
};

