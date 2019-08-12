module.exports = (sequelize, type) => {
    return sequelize.define('Employees',{
        id: {
            file: 'Emp_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Role_ID:{
            type: type.INTEGER,
            allowNull: false
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
       phone: type.STRING(50),
       email: type.STRING,
       address: type.STRING,
       isActive: {
           type: type.BOOLEAN,
           allowNull: false
        }
    }, { timestamps: false })
 
}