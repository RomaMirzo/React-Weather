export const getLocation = () => {
    return new Promise((resolve, reject) => {
      if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          resolve(position);
        });
      } else {
        reject();
      };
    });
  };