migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t0pmhvkd4p1nz4e")

  // remove
  collection.schema.removeField("8xe1qrjz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kzfqfgao",
    "name": "temps_lecture_astuces",
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
  const collection = dao.findCollectionByNameOrId("t0pmhvkd4p1nz4e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xe1qrjz",
    "name": "temps_lecture_astuces",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("kzfqfgao")

  return dao.saveCollection(collection)
})
