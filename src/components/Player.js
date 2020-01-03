import { createTemplate } from "../templates/_player";

export default class Player {
    // Global object with color scheme for input range
    theme = {
        "player--default": "#333",
        "player--dark": "#000",
        "player--megatron": "#dfae3e",
        "player--quepal": "#11998e"
    };

    constructor(className) {
        this.className = className;
        this.init();
    }

    init = () => {
        this.renderPlayer();
        this.eventService();
        this.rangePlayerHandler();
    };

    // Render player into DOM
    renderPlayer = () => {
        const container = document.querySelector(".container");

        container.insertAdjacentHTML("beforeend", createTemplate(this.className));
    };

    // Handles click events on the player
    eventService = () => {
        const player = document.querySelector(`.player.${this.className}`);

        player.addEventListener("click", e => {
            const target = e.target;
            const targetClass = target.classList;

            if (targetClass.contains("player__play-btn")) {
                targetClass.toggle("player__play-btn--active");
            } else if (targetClass.contains("speed__value")) {
                this.changeSpeed(target);
            } else if (target.closest(".player__download")) {
                console.log("download");
            } else if (target.closest(".player__upload")) {
                console.log("upload");
            }
        });
    };

    // Change playing speed of a track
    changeSpeed = target => {
        const newSpeed = target.textContent;
        const oldSpeed = document.querySelector(`.${this.className} .player__speed__text`);
        oldSpeed.textContent = newSpeed;
    };

    // Handles events on input range
    rangePlayerHandler = () => {
        const inputs = document.querySelectorAll(`.${this.className} .range`);

        [].slice.call(inputs).forEach(input => {
            input.addEventListener("input", () => this.rangeHandler(input));
            input.addEventListener("change", () => this.rangeHandler(input));
            this.rangeHandler(input);
        });
    };

    // Handles input range animation and styling
    rangeHandler = input => {
        const style = input.previousElementSibling;
        let css = `.{class} .{parentClass} .range::-webkit-slider-runnable-track{background:linear-gradient(90deg,${this.theme[this.className]} {value}%,#ecf0f1 0)}`;
        css = css.replace("{value}", Math.round(input.value));
        css = css.replace("{class}", this.className);
        css = css.replace("{parentClass}", input.dataset.parentClass);
        style.textContent = css;
    };
}
