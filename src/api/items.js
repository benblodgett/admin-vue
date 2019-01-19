const fetchItems = new Promise(resolve => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      resolve(response.data)
    })
    .catch(error =>{
      // eslint-disable-next-line
      console.log(error);
    })
});

export { fetchItems };
