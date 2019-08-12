module.exports = (sequelize, type) => {
    return sequelize.define('Desks',{
        id: {
            file: 'De_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        R_ID:{
            type: type.INTEGER,
            allowNull: false
        },
        Emp_ID: type.INTEGER,

        name: {
            type: type.STRING,
            allowNull: false
        },
      
       isActive: {
           type: type.BOOLEAN,
           allowNull: false
        }
    }, { timestamps: false })
 
}