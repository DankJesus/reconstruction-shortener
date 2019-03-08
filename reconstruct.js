function generateTinyUrl(link) {
    $.get(`https://cors.io/?http://tinyurl.com/api-create.php?url=${link}`, function (newUrl) {
        $("#result").val(newUrl)
        localStorage.setItem('link', document.getElementById("result").value);

        // window.open(document.getElementById('result').value, '_blank')

    });
}

function generateLink(puzzle, scramble, moves) {
    let link = `https://alg.cubing.net/?puzzle=${puzzle}&setup=${scramble}&alg=${moves}&type=reconstruction&view=playback`
    generateTinyUrl(link);
}

function generate() {
    var puzzle = $("#puzzle").find(":selected").val();
    var scramble = $("#scramble").val().replace(/ /g, '_').replace(/'/g, '-')
    var moves = $("#moves").val().replace(/ /g, '_').replace(/'/g, '-').replace(/\n/g, '%0A')

    generateLink(puzzle, scramble, moves);
    localStorage.setItem('puzzle', document.getElementById("puzzle").value);
    localStorage.setItem('scramble', document.getElementById("scramble").value);
    localStorage.setItem('moves', document.getElementById("moves").value);
    $("#result").select()
    document.execCommand('copy');

}

window.onload = function () {
    $("#puzzle").val(localStorage.getItem('puzzle'))
    $("#scramble").val(localStorage.getItem('scramble'))
    $("#moves").val(localStorage.getItem('moves'))
    $("#result").val(localStorage.getItem('link'))

}