import { sequelize } from "../../database";
import { DataTypes } from "sequelize";

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
    timeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    posicao: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Goleiro', 'Zagueiro', 'Lateral', 'Meio-campo', 'Atacante'],
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Provável', 'Duvidoso', 'Contundido', 'Suspenso', 'Nulo'],
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

Jogador.sync({alter: true, force: false})
    .then(() => {
        console.log("Tabela de Jogadores criada")
    })
    .catch((error) => {
        console.log("Erro ao criar tabela de Jogadores: " + error)
});