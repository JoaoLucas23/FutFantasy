import { sequelize } from "../../src/database";
import { DataTypes } from "sequelize";

export const Time = sequelize.define('Time', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    escudo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);

Time.sync({alter: true, force: false})
    .then(() => {
        console.log("Tabela de Times criada")
    })
    .catch((error) => {
        console.log("Erro ao criar tabela de Times: " + error)
});