class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

let numberInput = new NumberInput("Type numbers...");

AddRequiredValidation = function(instance) {
    let set = instance.setValue;
    instance.setValue = function(newValue){
        set.call(instance, newValue);
        if(this.valid !== false){
            if(newValue === ''){
                this.valid = false;
                console.log('It is empty string!')
            } else if(newValue === undefined){
                this.valid = false;
                console.log("It is undefined")
            } else {
                this.valid = true;
            }
        }
    }
}

AddMaxLengthValidation =  function(instance, maxLength) {
    let set =  instance.setValue;
    instance.setValue = function(newValue) {
        set.call(instance, newValue);
        if(this.valid !== false){
            if(newValue.length > maxLength) {
                this.valid = false;
                console.log('It is larger than max size');
            } else {
                this.valid = true;
            }
        }
    }

}
AddNumberValidation = function(instance) {
    let set = instance.setValue;
    instance.setValue = function(newValue) {
        set.call(instance, newValue);
        if(this.valid !== false){
            if(typeof newValue !== 'number'){
                this.valid = false;
                console.log('It is not number');
            } else {
                this.valid = true;
            }
        }
    }
}

AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 2);
AddNumberValidation(numberInput);


numberInput.setValue(5);
console.log(numberInput.valid);
