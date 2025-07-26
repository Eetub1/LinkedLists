class LinkedList {
    constructor() {
        this.firstNode = null
        this.lastNode = null
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value)
        if (this.firstNode === null) {
            this.firstNode = newNode
        } else {
            this.lastNode.nextNode = newNode
        }
        this.lastNode = newNode
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value)
        if (this.firstNode === null) {
            this.firstNode = newNode
            this.lastNode = newNode
        } else {
            const currentFirstNode = this.firstNode
            this.firstNode = newNode
            this.firstNode.nextNode = currentFirstNode
        }
        this.length++
    }

    size() {
        return this.length
    }

    head() {return this.firstNode}

    tail() {return this.lastNode}

    at(index) {
        let size = this.size()
        if (index >= size || index < 0) return null
        let current = this.head()
        for (let i = 0; i < index; i++) {
            current = current.nextNode 
        }
        return current
    }

    pop() {
        const size = this.size()
        if (size < 1) return
        if (size < 2) {
            this.firstNode = null
            this.lastNode = null
        } else {
            const secondLast = this.at(size - 2)
            secondLast.nextNode = null
            this.lastNode = secondLast
        }
        this.length--
    }

    contains(value) {
        let current = this.head()
        while (current) {
            if (current.value === value) return true
            current = current.nextNode
        }
        return false
    }

    find(value) {
        const size = this.size()
        if (size < 1) return null
        let current = this.head()
        for (let i = 0; i < size; i++) {
            if (current.value === value) return i
            current = current.nextNode
        }
        return null
    }

    toString() {
        const size = this.size()
        if (size < 1) return "( null )"
        let listAsString = ""
        let current = this.head()
        while (current) {
            listAsString += `( ${current.value} ) -> `
            current = current.nextNode
        }
        listAsString += "null"
        return listAsString
    }

    insertAt(value, index) {
        const size = this.size()
        if (index < 0 || index > size) return
        const newNode = new Node(value)
        if (size === 0 && index === 0) {
            this.firstNode = newNode
            this.lastNode = newNode
        //here it is guaranteed that size > 0
        } else if (index === size) {
            const currentLast = this.lastNode
            this.lastNode = newNode
            currentLast.nextNode = newNode
        } else if (index === 0) {
            const currentFirst = this.head()
            this.firstNode = newNode
            newNode.nextNode = currentFirst
        } else {
            const prev = this.at(index - 1)
            newNode.nextNode = prev.nextNode
            prev.nextNode = newNode
        }
        this.length++
    }

    removeAt(index) {
        const size = this.size()
        if (index >= size || index < 0) return
        if (size === 1) {
            this.firstNode = null
            this.lastNode = null
        } else if (index === size - 1) {
            const prev = this.at(index - 1)
            prev.nextNode = null
            this.lastNode = prev
        } else if (index === 0) {
            this.firstNode = this.firstNode.nextNode
        } else {
            const prev = this.at(index - 1)
            const next = prev.nextNode.nextNode
            prev.nextNode = next
        }
        this.length--
    }
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

    console.log("Ennen poistoa: ", list.at(4))
    list.pop()
    console.log("Poiston jälkeen: ", list.at(4))

    console.log(list.contains(10))
    console.log(list.contains(5))

    console.log(list.find(0))
    console.log(list.find(2))
    console.log(list.find(12))

    console.log(list.toString())

    list.insertAt(99, 0)
    console.log(list.toString())

    list.insertAt(90, 2)
    console.log(list.toString())

    list.removeAt(5)
    console.log(list.toString())

    list.removeAt(2)
    console.log(list.toString())

    list.removeAt(3)
    console.log(list.toString())
}

main()