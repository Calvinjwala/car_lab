// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js');
var expect = require('chai').expect;

var car1;

describe("Car", function(){

beforeEach(function(){
    car1 = new Car("Hyundai", "Elantra", 2008, "Black");
  });

  describe('#make', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current make', function(){
    expect(car1.make).to.equal("Hyundai");
    });
  });
  
  describe('#model', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current model', function(){
    expect(car1.model).to.equal("Elantra");
    });
  }); 

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
    expect(car1.year).to.equal(2008);
    });
  });

  describe('#color', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current color', function(){
    expect(car1.color).to.equal("Black");
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(car1.state).to.equal("off");
    });
  });

  describe('#previous_owners', function(){
    it('should initially be empty', function(){
    expect(car1.previous_owners).to.eql([]);
    });
  });

  describe('#current_owner', function(){
    it('should initially be manufacturer', function(){
    expect(car1.current_owner).to.eql("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
    expect(car1.passengers).to.eql([]);
    });
  });

  describe('#sale', function(){
    
    it('should move current_owner to previous_owners array', function(){
      car1.sale("calvin");
      expect(car1.previous_owners[0]).to.eql("manufacturer");
    });
    
    it('should update current_owner with the new owner', function(){
      car1.sale("calvin");
      expect(car1.current_owner).to.eql("calvin");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      car1.paint("blue");
      expect(car1.color).to.eql("blue");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      expect(car1.state).to.equal("off");
      car1.start();
      expect(car1.state).to.equal("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      // expect(car1.state).to.equal("on");
      car1.off();
      expect(car1.state).to.equal("off");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      car1.off();
      // expect(car1.park)to.console.log("")  
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      car1.start();
      car1.pickUp("Tom");
      expect(car1.passengers[0]).to.equal("Tom");
    });

    it('should not modify the passengers array if car is off', function(){
      expect(car1.passengers).to.eql([]);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      car1.start();
      car1.pickUp("Tom");
      car1.dropOff("Tom");
      expect(car1.passengers.length).to.equal(0);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      car1.start();
      car1.pickUp("Bob");
      car1.off();
      car1.dropOff("Bob");
      console.log(car1.passengers);
      expect(car1.passengers.length).to.equal(1);
    });
  });

});


