import client from '../utils/client';
// Get a vocab entry
const endpoint = client.databaseURL;
const getEntry = (uid) => new Promise((resolve, reject) => {
  // const encodedUid = encodeURIComponent(uid);
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json/',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
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
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getEntry,
  deleteEntry,
  updateEntry,
  createEntry,
  getSingleEntry
};
