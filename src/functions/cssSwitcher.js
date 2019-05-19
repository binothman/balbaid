export const removeJsCssFile = (filename, filetype) => {
  var targetelement =
    filetype == 'js' ? 'script' : filetype == 'css' ? 'link' : 'none' //determine element type to create nodelist from
  var targetattr =
    filetype == 'js' ? 'src' : filetype == 'css' ? 'href' : 'none' //determine corresponding attribute to test for
  var allsuspects = document.getElementsByTagName(targetelement)
  for (var i = allsuspects.length; i >= 0; i--) {
    //search backwards within nodelist for matching elements to remove
    if (
      allsuspects[i] &&
      allsuspects[i].getAttribute(targetattr) != null &&
      allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1
    )
      allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
  }
}

export const loadCSS = file => {
  document.querySelector(
    'head',
  ).innerHTML += `<link rel="stylesheet" href="${file}" type="text/css"/>`
}


export const semanticUiRTLSwitcher = dir => {
  if (dir === 'rtl') {
    removeJsCssFile('/assets/semantic-ui/semantic.min.css', 'css')
    loadCSS('/assets/semantic-ui/semantic.rtl.min.css')
  } else {
    removeJsCssFile('/assets/semantic-ui/semantic.rtl.min.css', 'css')
    loadCSS('/assets/semantic-ui/semantic.min.css')
  }
  loadCSS('/assets/css/style.css')
}
