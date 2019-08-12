module.exports = (sequelize, type) => {
    return sequelize.define('RecipeDishes',{
        RM_ID:{
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        Di_ID:{
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false
        },
       amount:{
        type: type.FLOAT,
        allowNull: false
    }
     
    }, { timestamps: false })
 
}