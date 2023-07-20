class MyArray {
    constructor() {
        this.length = 4;
        this.data = { '0': 'Diego', '1': 'Beto', '2': 'Maria' , 3: 'Jesus' }
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data
    }

    pop() {
        const lastItem =  this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--;
        

        return lastItem
    }

    delete( index ) {
        const item = this.data[index]
        this.shiftIndex( index )

        return item
    }

    shiftIndex( index ) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1]
        this.length--
    }

    unShift(item) {

        if (item) {
            for (let i = this.length - 1; 0 <= i; i--) {
                this.data[i + 1] = this.data[i]
            }

            this.data[0] = item

            this.length++
        }
        
        return this.length
    }

    shift() {
        const item = this.data[0]
        
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        
        delete this.data[this.length - 1]
        this.length--

        console.log(this.data);

        return item
    }
}

const myArray = new MyArray()

console.log(myArray.shift());