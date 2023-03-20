function play(song) {
    song.paused ? song.play() : song.pause()
}

const Search = () => {
    let filter = document.getElementById('search_from_songs').value.toLowerCase();
    let mytable = document.querySelector('.songs_container');
    let error = document.querySelector('.error');
    let listItems = mytable.getElementsByTagName('div');

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].innerHTML.toLowerCase().includes(filter)) {
            listItems[i].style.display = "flex";
        }
        else {
            listItems[i].style.display = "none";
            error.style.display = "block"
            error.innerHTML = " Sorry This song are not Found";
        }
    }
}

