module.exports = (sequelize, type) => {
    return sequelize.define('Bills',{
        Bill_ID:{
            type: type.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        D_Emp:{
            type: type.INTEGER,
            allowNull: false
        },
        De_ID:{
            type: type.INTEGER,
            allowNull: false
        },
        Cus_ID: type.INTEGER,
       date: type.DATE ,
       status: {
        type: type.BOOLEAN,
        allowNull: false
     }
     
    }, { timestamps: false })
 
}