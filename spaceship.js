class Spaceship {
  constructor (name, crewMembers, phasers, shields, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
    this.name = name
    this.crewMembers = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
    if (crewMembers.length === 0 ) {
      this.docked = true
    } else {
      this.docked = false
    }
    // if (!!crewMembers.length) {
    //   this.docked = false
    // }

    // var self = this
    // crewMembers.forEach(function(shipCrew){
    //   shipCrew.currentShip = self
    // })
    // crewMembers.forEach(shipCrew=>{
    //   shipCrew.currentShip = this
    // })
    crewMembers.forEach(function(shipCrew){
      shipCrew.currentShip = this}.bind(this)
    )
  }
}

// node is sandbox for JS like IRB
