function generateTinyUrl(link) {
    console.log(link);
    $.get(`https://cors.io/?http://tinyurl.com/api-create.php?url=${link}`, function (newUrl) {
        $("#result").val(newUrl)
        $("#result").select()
        // document.execCommand('copy')
        window.open(newUrl,'_blank')
    });
}

function generateLink(puzzle, scramble, moves) {
    let link = `https://alg.cubing.net/?puzzle=${puzzle}&setup=${scramble}&alg=${moves}&type=reconstruction&view=playback` 
    generateTinyUrl(link);
}

function generate() {
    var puzzle = $("#puzzle").find(":selected").val();
    var scramble = $("#scramble").val().replace(/ /g, '_').replace(/'/g, '-');
    var moves = $("#moves").val().replace(/ /g, '_').replace(/'/g, '-');

    generateLink(puzzle, scramble, moves);
}
