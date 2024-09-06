document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('deleteButton').addEventListener('click', () => {
    let parts = window.location.pathname.split('/');
    let id = parts[parts.length - 1];
    fetch(`/delete/${id}`, {
      method: 'DELETE',
    }).then(() => {
      window.location.href = '/';
    });
  });
});