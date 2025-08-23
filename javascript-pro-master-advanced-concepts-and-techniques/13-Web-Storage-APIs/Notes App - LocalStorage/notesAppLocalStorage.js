'use strict';

// Part 1: Notes App Using localStorage

// Selecting elements
const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

// Retrieve notes from localStorage (if available)
const getNotesFromLocalStorage = () => {
  const notes = JSON.parse(localStorage.getItem('notes'));
  return notes ?? [];
};

// Save notes to localStorage
const saveNotesToLocalStorage = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Render notes to the UI
const renderNotes = () => {
  notesList.innerHTML = ''; // Clear existing notes

  const notes = getNotesFromLocalStorage();

  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${note}</span>
      <button class="edit" onclick="editNote(${index})">Edit</button>
      <button class="delete" onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(li);
  });
};

// Add a new note
noteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const note = noteInput.value.trim();

  if (note) {
    const notes = getNotesFromLocalStorage();
    notes.push(note);
    saveNotesToLocalStorage(notes);

    noteInput.value = '';
    renderNotes();
  }
});

// Edit an existing note
const editNote = (index) => {
  const notes = getNotesFromLocalStorage();
  const newNote = prompt('Edit your note:', notes[index]);

  if (newNote !== null) {
    notes[index] = newNote;
    saveNotesToLocalStorage(notes);
    renderNotes();
  }
};

// Delete a note
const deleteNote = (index) => {
  const confirm = window.confirm('Are you sure you want to DELETE the note?');

  if (confirm) {
    const notes = getNotesFromLocalStorage();
    notes.splice(index, 1);
    saveNotesToLocalStorage(notes);
    renderNotes();
  }
};

// Load and display notes when the page is loaded / refresh
window.addEventListener('DOMContentLoaded', renderNotes);

// NOTE: Part 2: Syncing Tabs with the `storage` Event

// Sync notes across tabs using the 'storage' event
window.addEventListener('storage', () => {
  renderNotes(); // Update the UI when the storage changes
});

// ======================================================

// IMPORTANT: The `storage` event is fired whenever localStorage is updated from a different tab or window. This allows us to sync the notes across different tabs in real-time.

// Explanation:

// ✅ "storage Event": When `localStorage` is modified in one tab, all other tabs that are open to the same site will fire the `storage` event. We listen for this event and call `renderNotes()` to update the notes on the screen in the other tabs.

// ✅ Now, if a note is added or deleted in one tab, the other tabs will reflect this change instantly without requiring a page reload.

// ======================================================
