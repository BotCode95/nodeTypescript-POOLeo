
// Builder Concept Sample Code
// class Product {
//     parts: string[] = []
// }

// interface IBuilder {
//     buildPartA(): this
//     buildPartB(): this
//     buildPartC(): this
//     getResult(): Product
// }

// class Builder implements IBuilder {
//     // The Concrete Builder
//     product: Product

//     constructor() {
//         this.product = new Product()
//     }

//     buildPartA() {
//         this.product.parts.push('a')
//         return this
//     }

//     buildPartB() {
//         this.product.parts.push('b')
//         return this
//     }

//     buildPartC() {
//         this.product.parts.push('c')
//         return this
//     }

//     getResult() {
//         return this.product
//     }
// }

// class Director {
//     // The Director, building a complex representation

//     static construct() {
//         'Constructs and returns the final product'
//         return new Builder()
//             .buildPartA()
//             .buildPartB()
//             .buildPartC()
//             .getResult()
//     }
// }

// // The Client
// const PRODUCT1 = Director.construct()
// console.log(PRODUCT1.parts)

interface IHouseBuilder {
    house: House
    setBuildingType(buildingType: string): this
    setWallMaterial(wallMaterial: string): this
    setNumberDoors(number: number): this
    setNumberWindows(number: number): this
    getResult(): House
}

class HouseBuilder implements IHouseBuilder {
    house: House

    constructor() {
        this.house = new House()
    }

    setBuildingType(buildingType: string): this {
        this.house.buildingType = buildingType
        return this
    }

    setWallMaterial(wallMaterial: string): this {
        this.house.wallMaterial = wallMaterial
        return this
    }

    setNumberDoors(number: number): this {
        this.house.doors = number
        return this
    }

    setNumberWindows(number: number): this {
        this.house.windows = number
        return this
    }

    getResult(): House {
        return this.house
    }
}


class IglooDirector {
    static construct(): House {
        // Note that in this IglooDirector, it has omitted the
        // set_number_of windows call since this Igloo will have
        // no windows.
        return new HouseBuilder()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult()
    }
}


class CastleDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('Castle')
            .setWallMaterial('Sandstone')
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult()
    }
}

class House {
    doors = 0
    windows = 0
    wallMaterial = ''
    buildingType = ''

    construction(): string {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
    }
}



