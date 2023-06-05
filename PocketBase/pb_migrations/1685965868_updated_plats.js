migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b5pstqgarxbpqvy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rswodj8j",
    "name": "ville",
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

  // remove
  collection.schema.removeField("rswodj8j")

  return dao.saveCollection(collection)
})
