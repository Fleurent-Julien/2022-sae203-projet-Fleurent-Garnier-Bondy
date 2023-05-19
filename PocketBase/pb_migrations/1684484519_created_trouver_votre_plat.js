migrate((db) => {
  const collection = new Collection({
    "id": "b5pstqgarxbpqvy",
    "created": "2023-05-19 08:21:59.686Z",
    "updated": "2023-05-19 08:21:59.686Z",
    "name": "trouver_votre_plat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1aiuk36s",
        "name": "images",
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
      },
      {
        "system": false,
        "id": "txha3ttz",
        "name": "nom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "06celj6f",
        "name": "preparation",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "fhdhpkla",
        "name": "personne",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b5pstqgarxbpqvy");

  return dao.deleteCollection(collection);
})
