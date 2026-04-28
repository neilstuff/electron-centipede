class Sound {
  
    constructor () {
    
        this.sounds = {};
        this.sounds['newBeat'] = new Audio('assets/sounds/newBeat.wav');
        this.sounds['fire1'] = new Audio('assets/sounds/fire1.wav');
  
    }

    play(sound) {

        this.sounds[sound].loop = false;
        this.sounds[sound].play();

    }

   loop(sound) {

        this.sounds[sound].loop = true;
        this.sounds[sound].play();

    }
    pause(sound) {

        this.sounds[sound].loop = false;
        this.sounds[sound].pause();

    }

}

module.exports = Sound;