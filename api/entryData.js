import client from '../utils/client';
// Get a vocab entry
const endpoint = client.databaseURL;
const getEntry = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?uid=${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

getEntry()
  .then((vocabEntries) => {
    // console.warn(vocabEntries);

    const entryContainer = document.querySelector('#entries');

    if (entryContainer) {
      entryContainer.innerHTML = '';

      vocabEntries.forEach((entryObj) => {
        entryContainer.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${entryObj.title}</h5>
          <p class="card-text">${entryObj.definition}</p>
          <button class="btn btn-danger" id="delete-vocab-btn--${entryObj.firebaseKey}">Delete</button>
          <button class="btn btn-info" id="edit-vocab-btn--${entryObj.firebaseKey}">Edit</button>
        </div>
      </div>`;
      });
    }
  });

// Create a new vocab entry
const createEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// Delete a vocab entry
const deleteEntry = (entryFirebaseId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${entryFirebaseId}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Update an existing vocab entry
const updateEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Get a single vocab entry
const getSingleEntry = (entryFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${entryFirebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => Response.json())
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve({});
      }
    })
    .catch(reject);
});

export {
  getEntry,
  deleteEntry,
  updateEntry,
  createEntry,
  getSingleEntry
};
