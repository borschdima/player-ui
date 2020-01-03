export const createTemplate = className => {
    return `
    <div class="player ${className}">
        <div class="player__track-name">Название песни</div>
        <div class="player__track-control">
            <div class="player__item player__play-btn"></div>
            <div class="player__item player__time-passed">0:00</div>
            <div class="player__item player__track">
                <style scoped></style>
                <input class="range" id="track" type="range" min="0" max="100" value="0" data-parent-class="player__track"/>
            </div>
            <div class="player__item player__track-duration">3:18</div>
            <div class="player__item player__speed">
                <span class="player__speed__text">1x</span>
                <div class="player__speed__container">
                    <span class="speed__value">0.5x</span>
                    <span class="speed__value">1x</span>
                    <span class="speed__value">1.25x</span>
                    <span class="speed__value">1.5x</span>
                    <span class="speed__value">1.75x</span>
                    <span class="speed__value">2x</span>
                    <span class="speed__value">2.5x</span>
                </div>
            </div>
            <div class="player__item player__volume">
                <i class="fa fa-volume-down" aria-hidden="true"></i>
                <div class="player__volume__container">
                    <style scoped></style>
                    <input class="range" id="volume" orient="vertical" type="range" min="0" max="100" value="50" data-parent-class="player__volume__container"/>
                </div>
            </div>
            <div class="player__item player__download"><i class="fa fa-download" aria-hidden="true"></i></div>
            <div class="player__item player__upload"><i class="fa fa-upload" aria-hidden="true"></i></div>
        </div>
    </div>
    `;
};
