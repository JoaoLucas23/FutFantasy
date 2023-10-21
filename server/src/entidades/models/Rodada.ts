import { sequelize } from "../../database";
import { DataTypes } from "sequelize";

export const Rodada = sequelize.define('Rodada', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_inicio_mercado: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora_inicio_mercado: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    data_fim_mercado: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora_fim_mercado: {
        type: DataTypes.TIME,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);

Rodada.sync({alter: true, force: false})
    .then(() => {
        console.log("Tabela de Rodadas criada")
    })
    .catch((error) => {
        console.log("Erro ao criar tabela de Rodadas: " + error)
});
