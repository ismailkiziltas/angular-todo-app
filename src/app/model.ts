export class Model {
    user;
    items;

    constructor() {
        this.user = "İsmail";
        this.items = [
            new TodoItem("Spor", true),
            new TodoItem("Yemek", false),
            new TodoItem("Alışveriş", false),
            new TodoItem("Fatura", false),
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}