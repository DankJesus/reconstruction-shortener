function generateTinyUrl(link) {
    $.get(`https://cors.io/?http://tinyurl.com/api-create.php?url=${link}`, function (newUrl) {
        return newUrl;
    });
}

function generateLink(puzzle, scramble, moves) {
    let link = `alg.cubing.net/?puzzle=${puzzle}&setup=${scramble}&alg=${moves}&type=reconstruction&view=playback` 
    let result = generateTinyUrl(link);
    return result;
}

function generate() {
    var puzzle = $("#puzzle").find(":selected").value();
    var scramble = $("#scramble").html().replace(/ /g, '_').replace(/'/g, '-');
    var moves = $("#moves").html().replace(/ /g, '_').replace(/'/g, '-');

    let res = generateLink(puzzle, scramble, moves);
    console.log(res);
    $("#result").html(res)
}
