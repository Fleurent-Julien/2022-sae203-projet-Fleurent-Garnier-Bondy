migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b5pstqgarxbpqvy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rysfrmdj",
    "name": "date_creation",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b5pstqgarxbpqvy")

  // remove
  collection.schema.removeField("rysfrmdj")

  return dao.saveCollection(collection)
})
