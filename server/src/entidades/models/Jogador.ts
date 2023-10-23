import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
import { Time } from "./Time";

export const Jogador = sequelize.define('Jogador', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    posicao: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Goleiro', 'Zagueiro', 'Lateral', 'Meio-campo', 'Atacante'],
    },
    media: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);

Jogador.belongsTo(Time, {foreignKey: 'id_time', targetKey: 'id'});
Time.hasMany(Jogador, {foreignKey: 'id_time', sourceKey: 'id'});

Jogador.sync({alter: true, force: false})
    .then(() => {
        console.log("Tabela de Jogadores criada")
    })
    .catch((error) => {
        console.log("Erro ao criar tabela de Jogadores: " + error)
});