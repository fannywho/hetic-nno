class Preset {
    constructor() {
        Node.prototype.display = function(html_node) {
            this.helper = Helper;
            html_node.map(function(el) {
                this.appendChild(this.helper.display(el));
            }, this);

            return this.lastChild;
        };
        this.inputPosition = 2;
        this.submitPosition = 4;
        Preset.setGuessEvent();
    }

    static setGuessEvent() {
        Preset.event = document.createEvent('Event');
        Preset.event.initEvent('guess', true, true);
    }

    static allowGuessEvent(event) {
        function hasPressedEnter(event) {
            return event.type === "keypress" ? event.keyCode === 13 : false;
        }
        if (event.type === "click" || hasPressedEnter(event)) {
            event.target.dispatchEvent(Preset.event);
        }
    }
}
