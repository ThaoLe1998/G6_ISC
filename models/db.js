const Sequelize = require('sequelize');
const CustomerModel = require('./customer');
const BillModel = require('./bill');
const BillDetailModel = require('./billDetail');
const DeskModel = require('./desk');
const DishModel = require('./dish');
const DishTypeModel = require('./dishType');
const EmployeeModel = require('./employee');
const RawMaterialModel = require('./rawMaterial');
const RecipeDisheModel = require('./recipeDishe');
const RoomModel = require('./room');
const RoleModel = require('./role');


const sequelize = new Sequelize('Restaurant', 'G6', '12345',{
    dialect: 'mssql',
    host: 'localhost',
    // dialectOptions: {
    //     "options":{
    //         "instanceName": "SQLEXPRESS",
    //     }
    // },
    pool: {max: 20, min:0, acquire: 30000, idle:10000},
    logging: true
});

const Customer = CustomerModel(sequelize,Sequelize)
const Bill = BillModel(sequelize,Sequelize)
const BillDetail = BillDetailModel(sequelize,Sequelize)
const Desk = DeskModel(sequelize,Sequelize)
const Dish = DishModel(sequelize,Sequelize)
const DishType = DishTypeModel(sequelize,Sequelize)
const Employee = EmployeeModel(sequelize,Sequelize)
const RawMaterial = RawMaterialModel(sequelize,Sequelize)
const RecipeDish = RecipeDisheModel(sequelize,Sequelize)
const Room = RoomModel(sequelize,Sequelize)
const Role = RoleModel(sequelize,Sequelize)

BillDetail.belongsTo(Bill,{foreignKey: 'Bill_ID', as: 'Bills'})
Bill.hasMany(BillDetail, {foreignKey: 'Bill_ID', as: 'BillDetails'});

Bill.belongsTo(Desk, {foreignKey: 'De_ID', as: 'Desks'});
Desk.hasMany(Bill,{foreignKey: 'De_ID', as: 'Bill'})

Bill.belongsTo(Employee, {foreignKey: 'Emp_ID', as: 'Employee'});
Employee.hasMany(Bill,{foreignKey: 'Emp_ID', as: 'Bill1'})

BillDetail.belongsTo(Dish, {foreignKey: 'Di_ID', as: 'Dish'});
Dish.hasMany(BillDetail,{foreignKey: 'Di_ID', as: 'customers'})

Desk.belongsTo(Room, {foreignKey: 'R_ID', as: 'Room'});
Room.hasMany(Desk,{foreignKey: 'R_ID', as: 'Desk1'})

Desk.belongsTo(Employee, {foreignKey: 'Emp_ID', as: 'emp1'});
Employee.hasMany(Desk,{foreignKey: 'Emp_ID', as: 'Desk2'})

Dish.belongsTo(DishType, {foreignKey: 'DT_ID', as: 'DishType1'});
DishType.hasMany(Dish,{foreignKey: 'DT_ID', as: 'Dish1'})

Dish.belongsTo(RecipeDish, {foreignKey: 'Di_ID', as: 'RecipeDish1'});
RecipeDish.belongsTo(Dish,{foreignKey: 'Di_ID', as: 'Dish2'})

RawMaterial.hasMany(RecipeDish, {foreignKey: 'RM_ID', as: 'RawMaterial'});
RecipeDish.hasMany(RawMaterial,{foreignKey: 'RM_ID', as: 'customers'})

Employee.belongsTo(Role, {foreignKey: 'Role_ID', as: 'Role'});
Role.hasMany(Employee,{foreignKey: 'Role_ID', as: 'employee2'})




// sequelize.sync({force: true}).then(()=> {
//     console.log('Database & tables created!')
// });

module.exports ={
    Customer,
    Bill,
    BillDetail,
    Desk,
    Dish,
    DishType,
    Employee,
    RawMaterial,
    RecipeDish,
    Room
}