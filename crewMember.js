// ES5 notation, would define a variable if you needed to use a callback
// 'this' sets attr_accessor in Ruby
function CrewMember(position, currentShip = "Looking for a Rig") {
  this.position = position
  this.currentShip = currentShip
  // if (this.position === "Pilot" && this.currentShip === "Looking for a Rig") {
  //   this.engageWarpDrive = function() {
  //     return "had no effect"
  //   }
  // }
  this.engageWarpDrive = function() {
    if (this.position === "Pilot" && this.currentShip !== "Looking for a Rig") {
      this.currentShip.warpDrive = "engaged!"
    } else {
      return 'had no effect'
    }
  }
  // if (this.position === "Defender" && this.currentShip === "Looking for a Rig") {
  //   this.setsInvisibility = function() {
  //     return "had no effect"
  //   }
  // }
  this.setsInvisibility = function() {
    if (this.position === "Defender" && this.currentShip !== "Looking for a Rig") {
      this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }
  // if (this.position === "Gunner" && this.currentShip === "Looking for a Rig") {
  //   this.chargePhasers = function() {
  //     return "had no effect"
  //   }
  // }
  this.chargePhasers = function() {
    if (this.position === "Gunner" && this.currentShip !== "Looking for a Rig") {
      this.currentShip.phasersCharge = "charged!"
    } else {
      return 'had no effect'
    }
  }
}

// CrewMember.prototype.engageWarpDrive = function() {
//   return 'had no effect'
// }
// if you don't define a prototype, new instances will not inherit the function properties, and you would be resetting the value each time
