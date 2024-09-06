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
  const button = document.querySelector('button[role="switch"]');
  const span = button.querySelector('span[aria-hidden="true"]');
  function toggleSwitch() {
    if (button.getAttribute('aria-checked') === 'false') {
      button.setAttribute('aria-checked', 'true');
      button.classList.remove('bg-gray-200');
      button.classList.add('bg-indigo-600');
      span.classList.remove('translate-x-0');
      span.classList.add('translate-x-5');
    } else {
      button.setAttribute('aria-checked', 'false');
      button.classList.remove('bg-indigo-600');
      button.classList.add('bg-gray-200');
      span.classList.remove('translate-x-5');
      span.classList.add('translate-x-0');
    }
  }
  button.addEventListener('click', toggleSwitch);
});