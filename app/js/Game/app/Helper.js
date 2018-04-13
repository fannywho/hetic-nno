class Helper {
    static display(html_node) {
        let tag = document.createElement(html_node.tag);
        for (let attribute in html_node.attributes) {
            tag.setAttribute(attribute, html_node.attributes[attribute]);
        }
        tag.innerHTML = html_node.bindings;
        if (html_node.hasOwnProperty("event")) {
            tag.addEventListener(html_node.event.type, html_node.event.callback);
        }
        html_node.children.map(function (child) {
            tag.appendChild(Helper.display(child));
        });

        return tag;
    };

    static getUuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}
