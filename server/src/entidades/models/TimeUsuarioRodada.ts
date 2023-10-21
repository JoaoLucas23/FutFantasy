import { sequelize } from '../../database';
import { DataTypes } from 'sequelize';
import { Usuario } from './Usuario';

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
    id_rodada: {
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
    timestamps: true,
}
);

TimeUsuarioRodada.belongsTo(Usuario, {foreignKey: 'id_usuario', targetKey: 'id'});
Usuario.hasMany(TimeUsuarioRodada, {foreignKey: 'id_usuario', sourceKey: 'id'});

TimeUsuarioRodada.sync({alter: true, force: false})
    .then(() => {
        console.log("Tabela de TimeUsuarioRodada criada")
    })
    .catch((error) => {
        console.log("Erro ao criar tabela de TimeUsuarioRodada: " + error)
});
