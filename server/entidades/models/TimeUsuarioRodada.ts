import { sequelize } from '../../src/database';
import { DataTypes } from 'sequelize';

export const TimeUsuarioRodada = sequelize.define('TimeUsuarioRodada', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rodada: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    pontos: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
},
{
    timestamps: false,
}
);

TimeUsuarioRodada.sync({alter: true, force: false})
    .then(() => {
        console.log("Tabela de TimeUsuarioRodada criada")
    })
    .catch((error) => {
        console.log("Erro ao criar tabela de TimeUsuarioRodada: " + error)
});
