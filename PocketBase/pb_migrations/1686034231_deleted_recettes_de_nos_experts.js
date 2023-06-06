migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ojijgy3dh7dhmzj");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ojijgy3dh7dhmzj",
    "created": "2023-05-19 08:28:24.357Z",
    "updated": "2023-06-05 13:32:26.475Z",
    "name": "recettes_de_nos_experts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kq3f7oas",
        "name": "date_recettes_experts",
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
        "id": "ysev09xz",
        "name": "favoris_recettes_experts",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "35amhtza",
        "name": "nom_recettes_experts",
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
        "id": "slsxrjq7",
        "name": "lieu1_recettes_experts",
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
        "id": "fgobqmvy",
        "name": "lieu2_recettes_experts",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
