function seteditor(){
window.eh = ace.edit("IDE");
eh.setTheme("ace/theme/monokai");
// there are about 24 theme more
eh.setMode("ace/mode/html");
//There are also more mode
}
seteditor();