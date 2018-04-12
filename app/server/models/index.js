
import Sequelize from 'sequelize';

const sequelize = new Sequelize('sqlite://./db.sqlite');

export const Records = sequelize.define("records", {
    id: { type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    operation: {type: Sequelize.DataTypes.STRING, isRequired:true },
    date: Sequelize.DataTypes.STRING
},{
    timestamps: false
});

export default sequelize
