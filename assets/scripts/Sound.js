class Sound {
  
    constructor () {
    
        this.sounds = {};
        this.sounds['newBeat'] = new Audio('assets/sounds/newBeat.wav');
  
    }

    play(sound) {

        this.sounds[sound].loop = true;
        this.sounds[sound].play();

    }

    pause(sound) {

        this.sounds[sound].loop = false;
        this.sounds[sound].pause();

    }

}