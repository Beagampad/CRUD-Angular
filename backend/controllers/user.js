var con = require('../config');
var fs = require('fs');
var bcrypt = require('bcrypt-nodejs');


var controller = {

    /**
 * @api {post} /add Crea un usuario
 * @apiVersion 0.1.0
 * @apiName adduser
 * @apiGroup User
 *
 * @apiSuccess {IUser} object  Se crea un nuevo usuario.
 * @apiSuccess {Number} iduser   Id del usuario registrado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{"iduser":5,"username":"Manu","name":"Manolo","apellidos":"Díaz","email":"manu@hotmail.com","edad":"48","activo":"Si","password":"$2a$10$XMBVArrKINYns23eWH3Qr.9peoYP9dRCPYE7yhBHZybE963BmL6Ui"}]
 *
 *
 * @apiError UserBadResponse El usuario no ha podido crearse
 *
 * @apiError BaD-Response:
 *     HTTP/1.1 400 Bad Response
 *     {
 *       "error": "BadResponse"
 *     }
 */
    adduser: function (req, res) {

        console.log(req.body.email)

        let password = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {//Encriptación de Password
            bcrypt.hash(password, salt, null, function (err, hash) {
                password = hash;
        
        let sql = `INSERT INTO user (username,name,apellidos,email,edad,activo, password) VALUES ('${req.body.username}','${req.body.nombre}','${req.body.apellidos}','${req.body.email}','${req.body.edad}','${req.body.activo}','${password}')`;
        
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                return res.send(err);
                
            }
            else {
                let user = {
                    iduser: result.insertId,
                    username: req.body.username,
                    nombre: req.body.name,
                    apellidos: req.body.surname,
                    email: req.body.email,
                    password: req.body.password,
                    edad: req.body.date,
                    activo: req.body.activo
                }
               return res.send(user);
            }
        });

      });
  })
},
 /**
 * @api {get} /consult/ Obtiene la información de todos los usuarios
 * @apiVersion 0.1.0
 * @apiName consultuser
 * @apiGroup User
 *
 *
 * @apiSuccess {IUser} object  Trae todos los datos de los usuarios.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{"iduser":3,"username":"paquita","name":"paca","apellidos":"salas","email":"paca@hotmail.com","edad":"50","activo":"Si","password":"$2a$10$utJUSpdhTQE3JB2wZolP/.ohxRgqyNMQsnU6CJ..Xac6epFpcS0F2"},
 *     {"iduser":4,"username":"bea","name":"beatriz","apellidos":"gámez","email":"bea@yahoo.es","edad":"33","activo":"No","password":"$2a$10$HgIg2SzpwNa0WP.zy0UWQOZffEkR88wojlnitT5aI66TPaDnRjmjC"},
 *     {"iduser":5,"username":"Manu","name":"Manolo","apellidos":"Díaz","email":"manu@hotmail.com","edad":"48","activo":"Si","password":"$2a$10$XMBVArrKINYns23eWH3Qr.9peoYP9dRCPYE7yhBHZybE963BmL6Ui"},
 *     {"iduser":6,"username":"Salvador","name":"Salvador","apellidos":"Martín","email":"beagampad@hotmail.com","edad":"28","activo":"No","password":"$2a$10$oAMooQZERTTwzH4jHeXCT.0xTuoGuzKzlmfbpGtvXBL1yRQmmr0z."}]
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
    consultuser: function(req,res){

        let sql = 'SELECT * from user';
        con.query(sql, function (err, result) {
        if (err) {
           return res.send(err);
        }
        else {
          return  res.send(result);
            }
        });
    },
    /**
 * @api {get} /detalles/:id Obtiene la información de un usuario
 * @apiVersion 0.1.0
 * @apiName consultUserbyID
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {IUser} object  Devuelve un objeto Usuario.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{"iduser":5,"username":"Manu","name":"Manolo","apellidos":"Díaz","email":"manu@hotmail.com","edad":"48","activo":"Si","password":"$2a$10$XMBVArrKINYns23eWH3Qr.9peoYP9dRCPYE7yhBHZybE963BmL6Ui"}]
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
    consultUserbyID: function(req,res){

        let sql = `SELECT * from user WHERE iduser = ${req.query.id}`;
        con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
          return  res.send(err);
        }
        else {
            return  res.send(result);
        }
    })
    
    },
    /**
 * @api {post} /update/:id Actualiza la información de un usuario
 * @apiVersion 0.1.0
 * @apiName moduser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {IUser} object  Se modifica el usuario correctamente.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{"iduser":5,"username":"Manu","name":"Manolo","apellidos":"Díaz","email":"manu@hotmail.com","edad":"48","activo":"Si","password":"$2a$10$XMBVArrKINYns23eWH3Qr.9peoYP9dRCPYE7yhBHZybE963BmL6Ui"}]
 *
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
    moduser: function(req,res){

        console.log(req.body.username);

        let password = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {//Encriptación de Password
            bcrypt.hash(password, salt, null, function (err, hash) {
                password = hash;

        let sql = `UPDATE user SET username='${req.body.username}',name='${req.body.nombre}',apellidos= '${req.body.apellidos}',edad= '${req.body.edad}',email= '${req.body.email}',password= '${password}',activo='${req.body.activo}' where iduser = '${req.body.id}'`;
        
        con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
           return res.send(err);
        }
        else {
            let user = {
                iduser: result.insertId,
                username: req.body.username,
                nombre: req.body.name,
                apellidos: req.body.surname,
                email: req.body.email,
                password: req.body.password,
                edad: req.body.date,
                activo: req.body.activo
            }
            
          return  res.send(user);
        }
    });

  });
})
},
 /**
 * @api {post} /delete/:id Elimina un usuario
 * @apiVersion 0.1.0
 * @apiName borraruser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {IUser} object  Se elimina el usuario correctamente.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{}]
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
    borraruser: function(req,res){

    let sql = `DELETE FROM user where iduser = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(result);
        }
      });
    },
    
  
   
}//fin controller







module.exports = controller;