import { sequelize } from "../../database";
import { DataTypes } from "sequelize";

export const Confronto = sequelize.define('Confronto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rodada: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_time_mandante: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_time_visitante: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);