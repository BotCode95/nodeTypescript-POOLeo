"use strict";
// Builder Concept Sample Code
// class Product {
//     parts: string[] = []
// }
class HouseBuilder {
    constructor() {
        this.house = new House();
    }
    setBuildingType(buildingType) {
        this.house.buildingType = buildingType;
        return this;
    }
    setWallMaterial(wallMaterial) {
        this.house.wallMaterial = wallMaterial;
        return this;
    }
    setNumberDoors(number) {
        this.house.doors = number;
        return this;
    }
    setNumberWindows(number) {
        this.house.windows = number;
        return this;
    }
    getResult() {
        return this.house;
    }
}
class IglooDirector {
    static construct() {
        // Note that in this IglooDirector, it has omitted the
        // set_number_of windows call since this Igloo will have
        // no windows.
        return new HouseBuilder()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult();
    }
}
class CastleDirector {
    static construct() {
        return new HouseBuilder()
            .setBuildingType('Castle')
            .setWallMaterial('Sandstone')
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult();
    }
}
class House {
    constructor() {
        this.doors = 0;
        this.windows = 0;
        this.wallMaterial = '';
        this.buildingType = '';
    }
    construction() {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`;
    }
}
//# sourceMappingURL=builder2.js.map