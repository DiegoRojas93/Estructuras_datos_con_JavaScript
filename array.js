class MyArray {
    constructor() {
        this.length = 3;
        this.data = {
            0: "Jesus",
            1: "Maria",
            2: "Diego"
        }
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

    unShip(item) {

        if (item) {
            for (let i = 0; i < this.length; i++) {
                this.data[i + 1] = this.data[i + 1]
                console.log(i);
            }
    
            this.data[0] = item
            this.length++
    
            console.log(this.data, this.length);
        }
    }
}

const myArray = new MyArray()

// console.log(myArray.data);

myArray.unShip()
myArray.unShip('Beto')
