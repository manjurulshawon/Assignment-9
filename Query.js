// Query.js

module.exports = {
    // Create a new collection
    createCollection: function (collectionName) {
      return `db.createCollection("${collectionName}")`;
    },
  
    // Remove a collection from the database
    removeCollection: function (collectionName) {
      return `db.${collectionName}.drop()`;
    },
  
    // Insert a single document into a collection
    insertDocument: function (collectionName, document) {
      return `db.${collectionName}.insert(${JSON.stringify(document)})`;
    },
  
    // Delete/remove a single document from the collection
    deleteDocument: function (collectionName, query) {
      return `db.${collectionName}.remove(${JSON.stringify(query)})`;
    },
  };
  