migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ojijgy3dh7dhmzj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hohwvpq8",
    "name": "images_recettes_experts",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ojijgy3dh7dhmzj")

  // remove
  collection.schema.removeField("hohwvpq8")

  return dao.saveCollection(collection)
})
