migrate((db) => {
  const collection = new Collection({
    "id": "3eswgzkdxn4x07z",
    "created": "2023-05-19 08:38:28.741Z",
    "updated": "2023-05-19 08:38:28.741Z",
    "name": "prochains_evenements",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "adoxqptr",
        "name": "images_evenements",
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
        "id": "hrlqku7e",
        "name": "date_evenements",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "bvqal0nq",
        "name": "etat_evenements",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "myolhm4e",
        "name": "nom_evenements",
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
        "id": "pzlmfjvh",
        "name": "lieu1_evenements",
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
        "id": "hmoy6oes",
        "name": "lieu2_evenements",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("3eswgzkdxn4x07z");

  return dao.deleteCollection(collection);
})
