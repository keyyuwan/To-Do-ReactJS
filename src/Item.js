class Item {

    // variável de classe (todos os objetos criados a partir
    // dessa classe poderão ter acesso a essa variável)
    static lastId = 0

    constructor(text) {
        this.id = Item.lastId++
        this.text = text
        this.done = false
    }
}

export default Item