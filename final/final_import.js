
// copy to clipboard function
export function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.body.removeChild(textArea);
  alert('Copied to clipboard: ' + text);
};
