migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3eswgzkdxn4x07z")

  // remove
  collection.schema.removeField("bvqal0nq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gn97sica",
    "name": "etat_evenements",
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
  const collection = dao.findCollectionByNameOrId("3eswgzkdxn4x07z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bvqal0nq",
    "name": "etat_evenements",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("gn97sica")

  return dao.saveCollection(collection)
})
