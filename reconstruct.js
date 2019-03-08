function generateTinyUrl(link) {
    $.get(`http://tinyurl.com/api-create.php?url=${link}`, function (newUrl) {
        return newUrl;
    });
}

function generateLink(puzzle, scramble, moves) {
    let link = `https://cors.io/?alg.cubing.net/?puzzle=${puzzle}&setup=${scramble}&alg=${moves}&type=reconstruction&view=playback` 
    let result = generateTinyUrl(link);
    return result;
}

function generate() {
    var puzzle = $("#puzzle").find(":selected").text();
    var scramble = $("#scramble").html().replace(/ /g, '_').replace(/'/g, '-');
    var moves = $("#moves").html().replace(/ /g, '_').replace(/'/g, '-');

    let res = generateLink(puzzle, scramble, moves);
    console.log(res);
    $("#result").html(res)
}
