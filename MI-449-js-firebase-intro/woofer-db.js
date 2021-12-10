/* global firebase addWoofRow updateWoofRow deleteWoofRow */

// NOTE:
//   Ignore the comments with "eslint" -- those comments are telling
//   the linter it can safely hide the errors on those lines.

// TODO Sign into Firestore
const firebaseConfig = {
  apiKey: "AIzaSyBTcPYe8OEuk7Ng6vinmmH7BtnrrLZoGWM",
  authDomain: "woofer-9b0d4.firebaseapp.com",
  projectId: "woofer-9b0d4",
  storageBucket: "woofer-9b0d4.appspot.com",
  messagingSenderId: "455858929066",
  appId: "1:455858929066:web:7d9e4644977cbfeb50bfd3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

// CREATE a new woof in the database
function createWoofInDatabase (woof) { // eslint-disable-line no-unused-vars
  // TODO create a new document in the collection
  try {
    return db.collection('woofs')
      .add(woof)
  } catch (e) {
    console.log('error/firestore-create-error', e)
  }
}

// READ from Firestore when woofs are added, modified, or removed

// Call one of the following functions for each changed document:
//  1. addWoofRow(<woofKey>, <woof>)
//  2. updateWoofRow(<woofKey>, <woof>)
//  3. deleteWoofRow(<woofKey>)
// Make sure to pass the correct parameters!
function readWoofsInDatabase () {
  try {  
    return db.collection('woofs')
      .onSnapshot(function (snapshot) {
        let woofs = {}
        snapshot.docChanges().forEach(function (change) {
          const woof = change.doc
          if (change.type === 'added') {
            addWoofRow(woof.id, woof.data())
          } else if (change.type === 'modified') {
            updateWoofRow(woof.id, woof.data())
          } else if (change.type === 'removed') {
            delete deleteWoofRow(woof.id)
          }
        })
      })
  } catch (e) {
    console.log('error/firestore-read-error', e)
  }
   // TODO read added, modified, and removed documents
}

// UPDATE the woof in the database
async function updateWoofInDatabase (woofKey, woofText) { // eslint-disable-line no-unused-vars
  try {
    return db.collection('woofs')
      .doc(woofKey)
      .set({
        text: woofText
      })
  } catch (e) {
    console.log('error/firestore-update-error', e)
  }
  // TODO update the document in the collection
}

// DELETE the woof from the database
function deleteWoofFromDatabase (woofKey) { // eslint-disable-line no-unused-vars
  // TODO delete the document from the collection
  try {
    return db.collection('woofs')
      .doc(woofKey)
      .delete()
    } catch (e) {
      console.log('error/firestore-delete-error', e)
    }
  }
  
// Load all of the data
readWoofsInDatabase()