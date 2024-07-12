window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
  });
  
const functionApi = 'https://portfoliofuncaz.azurewebsites.net/api/GetResumeCounter?code=XbMp4Nr2oMliMUFPjZtfG2wkXllvX0S4r97NSkye1DBwAzFuSCW9zg%3D%3D';
const localfunc = 'http://localhost:7071/api/GetResumeCounter';
  
  const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
      .then(response => {
        return response.json()
      })
      .then(response => {
        count = response.count;
        console.log("Hello 👋, you are visitor number - " + count);
        document.getElementById('counter').innerText = count;
      }).catch(function (error) {
        console.log(error);
      });
    return count;
  }