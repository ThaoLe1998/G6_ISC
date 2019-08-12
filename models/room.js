module.exports = (sequelize, type) => {
    return sequelize.define('Rooms',{
        id: {
            file: 'R_ID',
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