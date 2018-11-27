class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = startDate
  }

  startDate(){
    let dateStartDate = new Date(startDate)
    return dateStartDate
  }
}
