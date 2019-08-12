module.exports = (sequelize, type) => {
    return sequelize.define('DishType',{
        id: {
            file: 'DT_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        name: {
            type: type.STRING,
            allowNull: false
        }
    }, { timestamps: false })
 
}