class LinkedList {
    constructor() {
        this.firstNode = null
        this.lastNode = null
    }

    append(value) {
        const newNode = new Node(value)
        if (this.firstNode === null) {
            this.firstNode = newNode
        } else {
            this.lastNode.nextNode = newNode
        }
        this.lastNode = newNode
    }

    //right now if list is empty then this doesn't work probably
    prepend(value) {
        const newNode = new Node(value)
        const currentFirstNode = this.firstNode
        this.firstNode = newNode
        this.firstNode.nextNode = currentFirstNode
    }

    size() {
        if (this.firstNode !== null) {
            let sum = 0
            let current = this.firstNode
            while (true) {
                sum += 1
                if (current.nextNode === null) break
                else {current = current.nextNode}
            }
            return sum
       } 
       return 0
    }

    head() {return this.firstNode}

    tail() {return this.lastNode}

    at(index) {
            if (this.firstNode !== null) {
            let count = 0
            let current = this.firstNode
            while (true) {
                if (count === index) return current
                count++
                if (current.nextNode === null) break
                else {current = current.nextNode}
            }
       } 
       return null
    }

    pop() {}

    contains(value) {}

    find(value) {}

    toString() {}
}

class Node {
    constructor(value=null, nextNode=null) {
        this.value = value
        this.nextNode = nextNode
    }
}

function main() {
    const list = new LinkedList()
    list.append(1)
    list.append(10)
    list.append(2)
    list.append(3)
    list.prepend(0)
    console.log(list.size())
    console.log(list.head().value)
    console.log(list.tail().value)
    console.log(list.at(2))
}

main()