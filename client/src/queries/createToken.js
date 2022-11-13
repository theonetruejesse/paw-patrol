import axios from 'axios';

export const createToken = () => {
    const d = new Date();
    const dt = d.toString();
    axios({
        method: 'get',
        url: `http://localhost:4000/mint?lon=0&lat=0&time=${dt}`,
        // responseType: 'stream'
      })
        .then(function (response) {
          console.log(response)
        });
}