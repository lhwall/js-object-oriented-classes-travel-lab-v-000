class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    let time = endDate - this.startDate.getFullYear()
    return time
  }

}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


  blocksTravelled(){
    let verticalBeginning = Number(this.beginningLocation.vertical)
    let horizontalBeginning = Number(this.beginningLocation.horizonal)
    let verticalEnding = Number(this.beginningLocation.vertical)
    let horizontalEnding = Number(this.beginningLocation.horizonal)
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let verticalTotal = Math.abs(verticalBeginning - verticalEnding)
    let horizontalTotal = Math.abs()
  }

}
