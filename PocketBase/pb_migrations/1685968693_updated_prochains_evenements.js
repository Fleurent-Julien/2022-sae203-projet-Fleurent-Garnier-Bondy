migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3eswgzkdxn4x07z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "heucjxrj",
    "name": "duree",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3eswgzkdxn4x07z")

  // remove
  collection.schema.removeField("heucjxrj")

  return dao.saveCollection(collection)
})
