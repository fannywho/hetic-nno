class Structure {
    getOneClueStructure() {
        return [{
            tag: "div",
            attributes : {},
            bindings : __CLUE_BIND__,
            children : [],
            event : {
                type : "keypress",
                callback: Preset.allowGuessEvent
            }
        }]
    }

    getCluesStructure() {
        return [
            {
                tag:"aside",
                attributes : {
                    class : "clues"
                },
                bindings : "",
                children : [
                    {
                        tag: "div",
                        attributes : {},
                        bindings : __CLUE_BIND__,
                        children : []
                    }
                ]
            }
        ];
    }

    getQuestionStructure() {
        return [
            {
                tag: "div",
                attributes: {
                    "class" : "block"
                },
                bindings: "",
                children:[
                    {
                        tag : "div",
                        attributes : {
                            "class" : "question"
                        },
                        bindings: "",
                        children : [
                            {
                                tag: "p",
                                attributes: {
                                    "class" : "description"
                                },
                                bindings: "YOLO est un sport de ouf. On nique des mamans et On fait la fête pendant des heures tellement c'est cool. J'aime les patates, mais les nouilles ces mieu. Vivement que YOOOOOOLLLLLOOOOOOOOOO !!!! hahaha ! Vu ? Ça marche beaucoup mieux. Les chameaux ces kewl aussi. Noïce. Chèvre et miel demain mais bon pot de pétunia. ",
                                children:[]
                            },{
                                tag: "pre",
                                attributes: {},
                                bindings: "",
                                children:[
                                    {
                                        tag: "code",
                                        attributes: {},
                                        bindings: "var a = 8;\nvar b = 12;\nCombien font 6 * 7 ?",
                                        children:[]
                                    }
                                ]
                            },{
                                tag: "input",
                                attributes: {
                                    "type" : "text",
                                    "placeholder" : "Type your answer here !"
                                },
                                bindings: "",
                                children:[],
                                event : {
                                    type : "keypress",
                                    callback: Game.allowGuessEvent
                                }
                            }/*,{
                                tag : "button",
                                attributes : {
                                    id:"submitter"
                                },
                                bindings: "Submit",
                                children : [],
                                event : {
                                    type : "click",
                                    callback: Preset.allowGuessEvent
                                }
                            }*/
                        ]
                    }
                ]
            }
        ];
    }
}
