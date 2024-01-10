// inputComponent.js
export class InputComponent {
  constructor(submitCallback) {
    this.submitCallback = submitCallback;
  }

  render() {
    return `
      <form id="noteForm" onsubmit="event.preventDefault(); this.submitCallback(
        document.getElementById('noteTitle').value,
        document.getElementById('noteDescription').value,
        document.getElementById('noteCategory').value
      )">
        <input type="text" id="noteTitle" placeholder="Titel" required>
        <textarea id="noteDescription" placeholder="Beschreibung" required></textarea>
        <select id="noteCategory">
          <!-- Kategorieoptionen werden hier eingefügt -->
        </select>
        <button type="submit">Notiz erstellen</button>
      </form>
    `;
  }
}
