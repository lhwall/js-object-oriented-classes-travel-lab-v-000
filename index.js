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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalBeginning = Number(this.beginningLocation.vertical)
    let horizontalBeginning = Number(eastWest.indexOf(this.beginningLocation.horizonal)) + 1
    let verticalEnding = Number(this.beginningLocation.vertical)
    let horizontalEnding = Number(eastWest.indexOf(this.beginningLocation.horizonal)) + 1


    let verticalTotal = Math.abs(verticalBeginning - verticalEnding)
    let horizontalTotal = Math.abs(horizontalBeginning - horizontalEnding)
    return verticalTotal + horizontalTotal
  }

}
