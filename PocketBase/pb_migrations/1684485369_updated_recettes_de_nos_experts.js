migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ojijgy3dh7dhmzj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ysev09xz",
    "name": "favoris_recettes_experts",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ojijgy3dh7dhmzj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ysev09xz",
    "name": "nouveaute_recettes_experts",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
