// Level 1 Solution
export class LikeComponent1{
    constructor(private _likesCount: number, private _isSelected: boolean){}

    get likesCount(){return this._likesCount}
    get isSelected(){return this._isSelected}

    onClick(){
        if (this._isSelected) {
            this._likesCount--;
            this._isSelected = false
        }else {
            this._likesCount++;
            this._isSelected = true;
        }
    }
}




// Level 2 Solution - Refactor to move this.isSelected out of the if/else statement
export class LikeComponent2{
    constructor(private _likesCount: number, private _isSelected: boolean){}

    get likesCount(){return this._likesCount}
    get isSelected(){return this._isSelected}

    onClick(){
        if (this.isSelected) {
            this._likesCount--;
        }else {
            this._likesCount++;
        }

        this._isSelected = !this._isSelected;
    }
}


// Level 3 Solution - Refactor to if/else statement to a ternary statement
export class LikeComponent3{
    constructor(private _likesCount: number, private _isSelected: boolean){}

    get likesCount(){return this._likesCount}
    get isSelected(){return this._isSelected}

    onClick(){
        this._likesCount += (this._isSelected) ? -1 :1
        this._isSelected = !this._isSelected;
    }
}