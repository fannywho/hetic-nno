class Game extends Preset {
    constructor(holderId, context) {
        super();
        this.game_holder = context.getElementById(holderId);
        this.nodeList = [];
    }

    setup(newNode) {
        if (this.nodeList.length > 0) {
            newNode.textContent = "OLOY";
        } else {
            newNode.textContent = "YOLO";
        }
    }

    getQuestion() {
        return this.controller.getQuestion(this.nodeList.length);
    }

    nextQuestion() {
        const nextNode = this.getQuestion();
        const uuid = Helper.getUuid();
        this.block = this.game_holder.display(nextNode);
        this.block.setAttribute("id", uuid);
        this.block.children[0].children[this.inputPosition].addEventListener("guess", this.handleGuess.bind(this));
        this.nodeList.push(uuid);
    }

    removeInputs() {
        const input = this.block.children[0].lastChild;
        this.block.children[0].removeChild(input);
    }

    handleGuess(event) {
        if (this.controller.validate(event.target.value)){
            this.block.setAttribute("validated", "true");
        } else {
            const clue = this.controller.getClue();
            console.log(clue);
            if (null === clue) {
                this.block.setAttribute("validated", "false");
            } else {
                if (this.block.children.length === 1) {
                    this.block.display(this.controller.getStructClue(clue ,true));
                } else {
                    this.block.lastElementChild.display(this.controller.getStructClue(clue ,false));
                }

                return;
            }
        }
        this.removeInputs();
        this.nextQuestion();
    }

    start() {
        this.controller = new GameController();
        const nextNode = this.getQuestion();
        const uuid = Helper.getUuid();
        this.block = this.game_holder.display(nextNode);
        this.block.setAttribute("id", uuid);
        this.block.children[0].children[this.inputPosition].addEventListener("guess", this.handleGuess.bind(this));
        this.nodeList.push(uuid);
    }
}
