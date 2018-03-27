function assign(obj) {
    for(let i = 1; i < arguments.length; i++){
        for(let key in arguments[i]){
            obj[key] = arguments[i][key];
        }
    }
    return obj;
}

function FighterInterface() {
    this.name;
    this.attack;
    this.hitpoints;
    this.totalHitpoints;

    this.getHitpoints = function() {
        return this.hitpoints;
    }
    this.setHitpoints = function(_hitpoints) {
        this.hitpoints = _hitpoints;
    }
    this.getTotalHitpoints = function() {
        return this.totalHitpoints;
    }
    this.setTotalHitpoints = function(_totalHitpoints) {
        this.totalHitpoints = _totalHitpoints;
    }
    this.getAttack = function(){
        return this.attack;
    }
    this.setAttack = function(_attack) {
        this.attack = _attack;
    }
    this.isAlive = function() {
        return this.getHitpoints() > 0
    }
}

function Champion(obj) {

    FighterInterface.call(this);

    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.totalHitpoints = obj.hitpoints;

    let _defence = false;

    function checkOpponentsDeath(opponent, self) {
        if(!opponent.isAlive()){
            self.setAttack(self.getAttack() + 1);
        }
    }
    function isDefenced() {
        if(_defence){
            _defence = false;
            return true;
        } else return false;
    }

    this.fight = function(fighter) {
        if(fighter.isAlive()){
            fighter.setHitpoints(fighter.getHitpoints() - this.getAttack());
            checkOpponentsDeath(fighter, this);
        } else console.log("Fighter is dead");
    }

    this.heal = function() {
        this.setHitpoints(this.getHitpoints() + 5);
        if(this.getHitpoints() > this.getTotalHitpoints()){
            this.setHitpoints(this.getTotalHitpoints);
        }
    }
    this.defence = function() {
        _defence  = true;
        this.setTotalHitpoints(this.getTotalHitpoints()++);
    }
    this.takeDamage = function(damage){
        if(isDefenced()){
            console.log("This fighter is defenced");
        } else {
            this.setHitpoints(this.getHitpoints() - damage);
        }
    }
}

function Monster(obj) {
    FighterInterface.call(this);
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.totalHitpoints = obj.hitpoints;

    let _enragedAmount = 0;

    function checkOpponentsDeath(opponent, self) {
        if(!opponent.isAlive()){
            self.setTotalHitpoints(+(opponent.getTotalHitpoints() / 10).toFixed() + self.totalHitpoints);
            let winHitpoints = +(opponent.getTotalHitpoints() / 4).toFixed() + self.getHitpoints();
            winHitpoints > self.totalHitpoints ? self.setHitpoints(self.totalHitpoints) : self.setHitpoints(winHitpoints);
        }
    }


    this.fight = function(fighter) {
        if(fighter.isAlive()){
            if(_enragedAmount){
                _enragedAmount--;
                fighter.takeDamage(this.getAttack() * 2);
            } else {
                fighter.takeDamage(this.getAttack());
            }
            checkOpponentsDeath(fighter, this);
        } else console.log("Fighter is dead");
    }

    this.enrage = function() {
        _enragedAmount = 2;
    }
    this.fury = function() {
        if((this.getHitpoints() - 5) > 0 && (this.getTotalHitpoints() - 5) > 0) {
            this.setHitpoints(this.getHitpoints() - 5);
            this.setTotalHitpoints(this.getTotalHitpoints() - 5);
            this.setAttack(this.getAttack() + 2);
        }
    }
}
