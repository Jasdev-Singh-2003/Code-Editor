function run() {
  let htmlCode = document.getElementById('html-code').value;
  let cssCode = document.getElementById('css-code').value;
  let jsCode = document.getElementById('js-code').value;
  let output = document.getElementById('output');

  // const highlightedHTMLCode = htmlCode.replace(new RegExp('\\b' + word + '\\b', 'g'), '<span class="highlight">' + word + '</span>');
  // const highlightedHTMLCode = htmlCode.replace(new RegExp('<' + div + '>', 'g'), '<span class="highlight">&lt;' + div + '&gt;</span>');

  output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode  + "</style>";
  output.contentWindow.eval(jsCode);

  // if(htmlCode.includes('<>')){

  // }

}

function handleTabKey(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    var textarea = event.target;
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;

    // Insert spaces or tab character at the current cursor position
    var indentation = '  '; // Two spaces for indentation, you can change this to a tab character ('\t') if you prefer
    textarea.value = textarea.value.substring(0, start) + indentation + textarea.value.substring(end);
    
    // Move the cursor to the end of the inserted indentation
    textarea.selectionStart = textarea.selectionEnd = start + indentation.length;
  }
}
