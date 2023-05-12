module.exports = (sequelize,DataTypes) =>{
    const Feedback = sequelize.define("Feedback",{
        Feedback:{
            type:DataTypes.STRING,
            allowNull : false,
        },
       });
    return Feedback;
};

