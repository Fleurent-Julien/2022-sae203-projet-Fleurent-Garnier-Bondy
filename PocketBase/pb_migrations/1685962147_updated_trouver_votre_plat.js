migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b5pstqgarxbpqvy")

  collection.name = "plats"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxpaemro",
    "name": "calories",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gswedr9j",
    "name": "ingredients",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0hvd6sfv",
    "name": "etapes",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b5pstqgarxbpqvy")

  collection.name = "trouver_votre_plat"

  // remove
  collection.schema.removeField("mxpaemro")

  // remove
  collection.schema.removeField("gswedr9j")

  // remove
  collection.schema.removeField("0hvd6sfv")

  return dao.saveCollection(collection)
})
