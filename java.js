var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        swal({
            title: "Success!",
            text: "Your Question has been Submitted Successfully!",
            icon: "success",
            button: "Owh Yeah!",
          });
    });
});

function personal() {
     document.getElementById('personal').style.display = 'block';
     document.getElementById('social').style.display = 'none';
     document.getElementById('articels').style.display = 'none';
     document.getElementById('collect').style.display = 'none';
     document.getElementById('question').style.display = 'none';

}
function ask() {
    document.getElementById('question').style.display = 'block';
    document.getElementById('personal').style.display = 'none';
     document.getElementById('social').style.display = 'none';
     document.getElementById('articels').style.display = 'none';
     document.getElementById('collect').style.display = 'none';

}
function collect() {
    document.getElementById('collect').style.display = 'block';
    document.getElementById('personal').style.display = 'none';
     document.getElementById('social').style.display = 'none';
     document.getElementById('articels').style.display = 'none';
     document.getElementById('question').style.display = 'none';

}
function articels() {
    document.getElementById('articels').style.display = 'block';
    document.getElementById('personal').style.display = 'none';
     document.getElementById('social').style.display = 'none';
     document.getElementById('collect').style.display = 'none';
     document.getElementById('question').style.display = 'none';

}
function social() {
    document.getElementById('social').style.display = 'block';
    document.getElementById('personal').style.display = 'none';
     document.getElementById('articels').style.display = 'none';
     document.getElementById('collect').style.display = 'none';
     document.getElementById('question').style.display = 'none';

}social