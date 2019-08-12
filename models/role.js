module.exports = (sequelize, type) => {
    return sequelize.define('Roles',{
        id: {
            file: 'Role_ID',
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