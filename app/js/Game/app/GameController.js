class GameController {
    constructor() {
        this.data = new Data();
        this.structs = new Structure();
    }

    validate(content) {
        return content == this.answer;
    }

    format(struct, data) {
        struct[0].children[0].children[0].bindings = data.description;
        struct[0].children[0].children[1].children[0].bindings = data.question;
        return struct;
    }

    getQuestion(number) {
        const data = this.data.getQuestions()[number];
        if (data) {
            this.answer = data.answer;
            this.clues = data.clues;
            this.currentTry = 0;
            return this.format(this.structs.getQuestionStructure(), data);
        } else {
            return false;
        }
    }

    getClue() {
        return this.clues.length > this.currentTry ? this.clues[this.currentTry++] : null;
    }

    getStructClue(clue, isFirst) {
        let struct = [];
        if (isFirst) {
            struct = this.structs.getCluesStructure();
            struct[0].children[0].bindings = clue;
        } else {
            struct = this.structs.getOneClueStructure();
            struct[0].bindings = clue;
        }

        return struct;
    }
}
