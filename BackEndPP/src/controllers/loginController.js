// // importa as configurações do banco
// const connection = require('../config/db');
// // importa o pacote para gerar token
// const jwt = require('jsonwebtoken');

// async function login(request, response) {
//   // constrói a consulta no banco
//   const query = 'SELECT * FROM users WHERE email = ?;';

//   // recupera o e-mail enviado do formulário
//   const params = Array(
//     request.body.email
//   );

//   // executa a consulta no banco pelo e-mail recebido
//   connection.query(query, params, (err, results) => {
//     // varifica se existe usuario com o email recebido    
//     if (results) {
//       // recupera os dados do usuario
//       const dadosUsuario = results[0];
//       // valida senha recebido do formulário e a existente no banco
//       if (dadosUsuario.password === request.body.password) {        
//         const id = dadosUsuario.id;
        
//         // criando token de acesso a aplicação
//         const token = jwt.sign(
//           { id },   // payload: informações como o identificador do usuário
//           'token',      // chave secreta: A ideia é que só você saiba a sua chave secreta e que ela seja difícil a fim de dificultar a ação de ataques maliciosos
//           { expiresIn: '5h' } // opcionais
//         );
        
//         response
//           .status(200)
//           .json({
//             success: true,
//             message: 'Sucesso!',
//             data: dadosUsuario,
//             token: token
//           })
//       }
//     }
//   })
// }

// module.exports = {
//   login
// };



// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

// Authentication
async function login(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM users WHERE `email` = ?";
    console.log(request.body)
    // Recuperar credenciais informadas
    const params = Array(
        request.body.email
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {     
                console.log(results[0])           
                bcrypt.compare(request.body.password, results[0].password, (err, result) => {
                    if (err) {                        
                        return response.status(401).send({
                            msg: 'Email or password is incorrect!'
                        });
                    } else if(result) {
                        const id = results[0].id;
                        const token = jwt.sign({ userId: id },'the-super-strong-secrect',{ expiresIn: 1000 });
                        results[0]['token'] = token; 
                        
                        response
                        .status(200)
                        .json({
                            success: true,
                            message: `Sucesso! Usuário conectado.`,
                            data: results
                        });
                    }
                })
                
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err,
                    sqlMessage: err
                });
        }
    });
}

module.exports = {
    login
}