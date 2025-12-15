let personas=[
{nombre:"Karianna",
  email: "karianna@gmail.com",
  pais: "CO",
  activo: true,
  createdAt: new Date(),
  updatedAt: new Date(),
},
{nombre:"Amin",
  email: "amin@gmail.com",
  pais: "VE",
  activo: true,
  createdAt:  new Date(),
  updatedAt:  new Date(),
},
{nombre:"Carlos",
  email: "carlos@gmail.com",
  pais: "AR",
  activo: true,
  createdAt:  new Date(),
  updatedAt:  new Date(),
},
{nombre:"Ana",
  email: "ana@gmail.com",
  pais: "CL",
  activo: true,
  createdAt:  new Date(),
  updatedAt:  new Date(),
},
{nombre:"Joshua",
  email: "joshua@gmail.com",
  pais: "ES",
  activo: true,
  createdAt:  new Date(),
  updatedAt: new Date(),
},
{nombre:"Paola",
  email: "paola@gmail.com",
  pais: "MX",
  activo: true,
  createdAt: new Date(),
  updatedAt: new Date(),
},
]

db.usuarios.insertMany(personas)

let productos=[
{nombre:"Cama",
  categoria: "hogar",
  precio: 20,
  stock: 5,
  tags: ["nuevo", "2025"],
  createdAt: new Date(),
  updatedAt: new Date(),
},
{nombre:"laptop",
  categoria: "electronica",
  precio: 400,
  stock: 10,
  tags: ["oferta", "innovador"],
  createdAt: new Date(),
  updatedAt: new Date(),
},
{nombre:"zapatos",
  categoria: "ropa",
  precio: 35,
  stock: 20,
  tags: ["moda", "2025"],
  createdAt: new Date(),
  updatedAt: new Date(),
},
{nombre:"camisa",
  categoria: "ropa",
  precio: 20,
  stock: 5,
  tags: ["moda", "2025"],
  createdAt: new Date(),
  updatedAt: new Date(),
},
{nombre:"iphone 13",
  categoria: "electronica",
  precio: 700,
  stock: 10,
  createdAt: new Date(),
  tags: ["oferta", "nuevo"],
  updatedAt: new Date(),
},
{nombre:"mesa",
  categoria: "hogar",
  precio: 50,
  stock: 10,
  tags: ["oferta", "innovador"],
  createdAt: new Date(),
  updatedAt: new Date(),
},
{nombre:"falda",
  categoria: "ropa",
  precio: 20,
  stock: 8,
  tags: ["moda", "2025"],
  createdAt: new Date(),
  updatedAt: new Date(),
},
{nombre:"televisor",
  categoria: "electronica",
  precio: 200,
  stock: 42,
  tags: ["oferta", "nuevo"],
  createdAt: new Date(),
  updatedAt: new Date(),
},
]

db.productos.insertMany(productos)

db.usuarios.find({}) //buscar id usuarios
db.productos.find({}) //buscar id productos

let pedidos=[
  {usuarioId: ObjectId("694038f0338379a24544152e"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441534"),
    cantidad: 1,
    precioUnitario: 20
  },
    {productoId: ObjectId("6940395a338379a245441535") ,
    cantidad: 2,
    precioUnitario: 400
  }
  ],
  estado: "pagado",
  total: 20 + 800,
  createdAt: new Date(),
  updatedAt:new Date()
}, 

  {usuarioId: ObjectId("694038f0338379a245441533"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441536") ,
    cantidad: 2,
    precioUnitario: 35,
  },
    {productoId: ObjectId("6940395a338379a245441535") ,
    cantidad: 1,
    precioUnitario:400
  }
  ],
  estado: "enviado",
  total: 70 + 400,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
  {usuarioId:ObjectId("694038f0338379a24544152f"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441539") ,
    cantidad: 1,
    precioUnitario: 50,
  },
    {productoId: ObjectId("6940395a338379a245441534") ,
    cantidad: 1,
    precioUnitario: 20
  }
],
  estado: "enviado",
  total: 50+20,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
{usuarioId:ObjectId("694038f0338379a24544152f"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441534") ,
    cantidad: 1,
    precioUnitario: 20
  },
    {productoId: ObjectId("6940395a338379a245441538"),
    cantidad: 1,
    precioUnitario: 700
  }
],
  estado: "creado",
  total: 20+700,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
{usuarioId: ObjectId("694038f0338379a245441530"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441534") ,
    cantidad: 1,
    precioUnitario: 20
  },
    {productoId: ObjectId("6940395a338379a245441539") ,
    cantidad: 1,
    precioUnitario: 50,
  }
],
  estado: "cancelado",
  total: 20+50,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
{usuarioId: ObjectId("694038f0338379a245441530"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441539") ,
    cantidad: 1,
    precioUnitario: 50,
  },
    {productoId: ObjectId("6940395a338379a245441536"),
    cantidad: 1,
    precioUnitario: 35
  }
],
  estado: "cancelado",
  total: 50+35,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
{usuarioId:ObjectId("694038f0338379a245441531"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441536"),
    cantidad: 2,
    precioUnitario: 35,
  },
    {productoId: ObjectId("6940395a338379a245441539"),
    cantidad: 2,
    precioUnitario: 50,
  }
],
  estado: "creado",
  total: 70+100,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
{usuarioId:ObjectId("694038f0338379a245441531"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441537") ,
    cantidad: 1,
    precioUnitario: 20,
  },
    {productoId: ObjectId("6940395a338379a245441539") ,
    cantidad: 2,
    precioUnitario: 50,
  }
],
  estado: "creado",
  total: 20+100,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
{usuarioId:ObjectId("694038f0338379a245441532"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441537"),
    cantidad: 1,
    precioUnitario: 20,
  },
    {productoId: ObjectId("6940395a338379a245441538") ,
    cantidad: 2,
    precioUnitario: 700,
  }
],
  estado: "pagado",
  total: 20+1400,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
{usuarioId:ObjectId("694038f0338379a245441532"),
  items: 
  [{productoId: ObjectId("6940395a338379a245441538") ,
    cantidad: 1,
    precioUnitario: 700,
  },
    {productoId: ObjectId("6940395a338379a245441539") ,
    cantidad: 1,
    precioUnitario: 50,
  }
],
  estado: "pagado",
  total: 700+50,
  createdAt: new Date(),
  updatedAt:new Date()
}, 
]

db.pedidos.insertMany(pedidos)

//3) Filtrado de datos, actualización y eliminación

//Comparación y rangos:

  //-Productos con precio entre 10 y 50 (inclusive)

  db.productos.find({
  precio: {
    $gte: 10,
    $lte: 50
  }
})

  //Productos con stock = 0

    db.productos.find({
    stock: 0
  })

    //Usuarios activo = true de un país específico.
  db.usuarios.find({
    $and: [
      { activo: true },
      { pais: "VE" }
    ]
  })

//Arreglos y texto

  //Productos cuyo tags contenga la palabra "oferta" (usa regex).
  db.productos.find({
      tags: /oferta/i
    })

  //Productos que tengan ambos tags: "nuevo" y "2025" (usa $all).
  db.productos.find({
      tags: {$all: ["nuevo", "2025"]
    }})
  
  //Búsqueda de texto por nombre o tags.
   db.productos.find({
    $or: [
      { nombre: /cama/i },
      { tags: /nuevo/i }
    ]
  })

//Lógica y paginación

  //Usuarios de pais que no sean iguales a { "VE", "AR", "ES" } y activo = true.

  db.usuarios.find({
    $and:[
      {pais: {$nin: ["VE", "AR", "ES" ]}},
      {activo: true}
      ]
    })

  //Productos donde categoria = "electronica" o precio < 20.

  db.productos.find({
    $or:[
      {categoria: "electronica"},
      {precio:{ $lt: 20 }}
      ]
    })


  // Últimos 5 pedidos por createdAt desc.
  db.pedidos.find().sort({
        createdAt: -1
      }).limit(5)

//B) Actualizaciones (updateOne/updateMany)

  //Incrementos de inventario

    //Aumenta en +5 el stock de todos los productos en una categoría dada ($inc)

      db.productos.updateMany({ categoria: "electronica" },{ $inc:{ stock: 5 }} )
  
  //Cambios de estado

    //Cambia estado de un pedido de "creado" a "pagado"

      db.pedidos.updateOne({ estado: "creado" },{ $set:{ estado: "pagado" }} )
    
  //Datos de usuario

    //Actualiza nombre o pais de un usuario, y actualizar updatedAt

    db.usuarios.updateOne({ nombre: "Paola" },{ $set:{ nombre: "Andrea", updatedAt:  new Date() }} )
  
  //Arreglos en productos

    //Agrega un tag sin duplicar.
    db.productos.updateOne({ nombre: "falda" },{ $addToSet:{ tags: "oferta"}} )

    //Elimina un tag específico.
     db.productos.updateOne({ nombre: "Cama" },{ $pull:{ tags: "oferta"}} )

//C) Eliminación (deleteOne/deleteMany)

  //Eliminación lógica (soft delete)

    //En usuarios, agrega deletedAt: new Date() y activo: false a un usuario concreto (hazlo con update, no lo borres físicamente).
 
    db.usuarios.updateOne({ nombre: "Karianna" },{ $set:{ activo: false, deletedAt: new Date() }} )

  //Eliminación física (hard delete)
    //Elimina un producto específico por _id.

    db.productos.deleteOne({ _id: ObjectId("6940395a338379a245441536") })


    //Borra todos los pedidos con estado = "cancelado".
    db.pedidos.deleteMany({estado:"cancelado" })