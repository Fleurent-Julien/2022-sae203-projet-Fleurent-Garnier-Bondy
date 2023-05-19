migrate((db) => {
  const collection = new Collection({
    "id": "ojijgy3dh7dhmzj",
    "created": "2023-05-19 08:28:24.357Z",
    "updated": "2023-05-19 08:28:24.357Z",
    "name": "recettes_de_nos_experts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kq3f7oas",
        "name": "date",
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
        "name": "nouveaute",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "35amhtza",
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
        "id": "slsxrjq7",
        "name": "lieu1",
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
        "name": "lieu2",
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
  const collection = dao.findCollectionByNameOrId("ojijgy3dh7dhmzj");

  return dao.deleteCollection(collection);
})
