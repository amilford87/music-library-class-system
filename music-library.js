class Track {
    constructor(title, rating, length){
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
};

class Playlist{
    constructor (name){
        this.name = name;
        this.tracks = [];
    }
    addTrack(tracks){
        this.tracks.push(tracks);
    }
    get overallRating(){
        let totalRating = 0;
        this.tracks.forEach((track) =>{
            totalRating += track.rating;
        })
        totalRating = Math.round((totalRating / this.tracks.length * 10) / 10);
        return `The overall rating for '${this.name}' is: ${totalRating}.`;
    }
    get totalDuration(){
        let totalTime = 0;
        this.tracks.forEach((track) =>{
            totalTime += track.length;
        })
        return `The total duration of '${this.name}' is ${Math.floor(totalTime / 60)} minutes and ${totalTime % 60} seconds.`
    }
};

class Library{
    constructor (name, creator){
        this.name = name;
        this.creator = creator;
        this.playlists = [];
    }
    addPlaylist(playlist){
        this.playlists.push(playlist);
    }
}

//New Library
const pop = new Library("Pop", "Joey");
//New Tracks
let track1 = new Track("Fun Times", 3, 194);
let track2 = new Track("Ohh Party Party", 2, 185);
let track3 = new Track("Something About Love", 4, 213);
let track4 = new Track("Dancing Tonight", 4, 187);
let track5 = new Track("Time Moves Slowly", 2, 197);
let track6 = new Track("Somebody To Love Me", 5, 188);
let track7 = new Track("Twirling Around", 1, 175);

//New Playlists
let playlist1 = new Playlist("Songs To Dance To");
let playlist2 = new Playlist("Emotional Songs");

//Building Playlist1
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track4);
playlist1.addTrack(track6);
playlist1.addTrack(track7);


// Building Playlist2
playlist2.addTrack(track1);
playlist2.addTrack(track3);
playlist2.addTrack(track5);
playlist2.addTrack(track6);
playlist2.addTrack(track7);

//Building the Library
pop.addPlaylist(playlist1);
pop.addPlaylist(playlist2);