const Sequelize = require("sequelize")
const connection = require("./database")

const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

//Sincroniza com o banco
Resposta.sync({force: false})

module.exports = Resposta