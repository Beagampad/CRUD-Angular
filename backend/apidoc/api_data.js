define({ "api": [
  {
    "type": "post",
    "url": "/add",
    "title": "Crea un usuario",
    "version": "0.1.0",
    "name": "adduser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "IUser",
            "optional": false,
            "field": "object",
            "description": "<p>Se crea un nuevo usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "iduser",
            "description": "<p>Id del usuario registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\"iduser\":5,\"username\":\"Manu\",\"name\":\"Manolo\",\"apellidos\":\"Díaz\",\"email\":\"manu@hotmail.com\",\"edad\":\"48\",\"activo\":\"Si\",\"password\":\"$2a$10$XMBVArrKINYns23eWH3Qr.9peoYP9dRCPYE7yhBHZybE963BmL6Ui\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserBadResponse",
            "description": "<p>El usuario no ha podido crearse</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BaD-Response:",
            "description": "<p>HTTP/1.1 400 Bad Response { &quot;error&quot;: &quot;BadResponse&quot; }</p>"
          }
        ]
      }
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/delete/:id",
    "title": "Elimina un usuario",
    "version": "0.1.0",
    "name": "borraruser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "IUser",
            "optional": false,
            "field": "object",
            "description": "<p>Se elimina el usuario correctamente.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/detalles/:id",
    "title": "Obtiene la información de un usuario",
    "version": "0.1.0",
    "name": "consultUserbyID",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "IUser",
            "optional": false,
            "field": "object",
            "description": "<p>Devuelve un objeto Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\"iduser\":5,\"username\":\"Manu\",\"name\":\"Manolo\",\"apellidos\":\"Díaz\",\"email\":\"manu@hotmail.com\",\"edad\":\"48\",\"activo\":\"Si\",\"password\":\"$2a$10$XMBVArrKINYns23eWH3Qr.9peoYP9dRCPYE7yhBHZybE963BmL6Ui\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/consult/",
    "title": "Obtiene la información de todos los usuarios",
    "version": "0.1.0",
    "name": "consultuser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "IUser",
            "optional": false,
            "field": "object",
            "description": "<p>Trae todos los datos de los usuarios.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\"iduser\":3,\"username\":\"paquita\",\"name\":\"paca\",\"apellidos\":\"salas\",\"email\":\"paca@hotmail.com\",\"edad\":\"50\",\"activo\":\"Si\",\"password\":\"$2a$10$utJUSpdhTQE3JB2wZolP/.ohxRgqyNMQsnU6CJ..Xac6epFpcS0F2\"},\n{\"iduser\":4,\"username\":\"bea\",\"name\":\"beatriz\",\"apellidos\":\"gámez\",\"email\":\"bea@yahoo.es\",\"edad\":\"33\",\"activo\":\"No\",\"password\":\"$2a$10$HgIg2SzpwNa0WP.zy0UWQOZffEkR88wojlnitT5aI66TPaDnRjmjC\"},\n{\"iduser\":5,\"username\":\"Manu\",\"name\":\"Manolo\",\"apellidos\":\"Díaz\",\"email\":\"manu@hotmail.com\",\"edad\":\"48\",\"activo\":\"Si\",\"password\":\"$2a$10$XMBVArrKINYns23eWH3Qr.9peoYP9dRCPYE7yhBHZybE963BmL6Ui\"},\n{\"iduser\":6,\"username\":\"Salvador\",\"name\":\"Salvador\",\"apellidos\":\"Martín\",\"email\":\"beagampad@hotmail.com\",\"edad\":\"28\",\"activo\":\"No\",\"password\":\"$2a$10$oAMooQZERTTwzH4jHeXCT.0xTuoGuzKzlmfbpGtvXBL1yRQmmr0z.\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/update/:id",
    "title": "Actualiza la información de un usuario",
    "version": "0.1.0",
    "name": "moduser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "IUser",
            "optional": false,
            "field": "object",
            "description": "<p>Se modifica el usuario correctamente.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\"iduser\":5,\"username\":\"Manu\",\"name\":\"Manolo\",\"apellidos\":\"Díaz\",\"email\":\"manu@hotmail.com\",\"edad\":\"48\",\"activo\":\"Si\",\"password\":\"$2a$10$XMBVArrKINYns23eWH3Qr.9peoYP9dRCPYE7yhBHZybE963BmL6Ui\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.js",
    "groupTitle": "User"
  }
] });
