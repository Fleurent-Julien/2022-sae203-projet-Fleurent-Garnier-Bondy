migrate((db) => {
  const collection = new Collection({
    "id": "t0pmhvkd4p1nz4e",
    "created": "2023-05-19 08:33:01.580Z",
    "updated": "2023-05-19 08:33:01.580Z",
    "name": "tips_et_astuces",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ns4lrmpt",
        "name": "images_astuces",
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
        "id": "wyixmxvz",
        "name": "date_astuces",
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
      },
      {
        "system": false,
        "id": "k267bwjg",
        "name": "nom_astuces",
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
        "id": "osgwo8mq",
        "name": "nom_createur_astuces",
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
        "id": "whebzjah",
        "name": "lieu_astuces",
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
  const collection = dao.findCollectionByNameOrId("t0pmhvkd4p1nz4e");

  return dao.deleteCollection(collection);
})
