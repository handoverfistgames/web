const email = window.HOF_CONFIG?.supportEmail?.trim() || '';
document.querySelector('#year').textContent = new Date().getFullYear();
if (email) { const contact = document.createElement('a'); contact.href = `mailto:${email}`; contact.textContent = email; document.querySelector('#contact-status').replaceChildren('For help and feedback, email ', contact, ', or prepare a message using this form.'); }
document.querySelector('#feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  const topic = document.querySelector('#topic').value;
  const game = document.querySelector('#game').value.trim();
  const message = document.querySelector('#message').value.trim();
  if (message.length < 10) { document.querySelector('#form-status').textContent = ''; document.querySelector('#message').setCustomValidity('Please enter at least 10 characters.'); document.querySelector('#message').reportValidity(); return; }
  const body = `Topic: ${topic}\n${game ? `Game / platform: ${game}\n` : ''}\n${message}`;
  document.querySelector('#prepared-message').value = body;
  document.querySelector('#message-result').hidden = false;
  document.querySelector('#form-status').textContent = email ? 'Ready to copy or open in your email app. Your message has not been sent.' : 'Ready to copy. Sending will be available when our support email is announced.';
  const emailLink = document.querySelector('#email-message');
  if (email) { emailLink.href = `mailto:${email}?subject=${encodeURIComponent(`[HAND OVER FIST] ${topic}`)}&body=${encodeURIComponent(body)}`; emailLink.hidden = false; }
  document.querySelector('#prepared-message').focus();
});
document.querySelector('#message').addEventListener('input', event => event.target.setCustomValidity(''));
document.querySelector('#copy-message').addEventListener('click', async () => {
  const field = document.querySelector('#prepared-message');
  try { await navigator.clipboard.writeText(field.value); document.querySelector('#form-status').textContent = 'Copied. Your message has not been sent.'; }
  catch { field.focus(); field.select(); document.querySelector('#form-status').textContent = 'Select and copy the prepared text using your device’s copy command.'; }
});
const privacy = document.querySelector('#privacy-dialog');
document.querySelector('#privacy-button').addEventListener('click', () => privacy.showModal());
