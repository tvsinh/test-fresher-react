// import animalApi from 'api/animalApi';
// import StorageKeys from 'Constants/storage-keys';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router';

// DetailPage.propTypes = {};

// function DetailPage(props) {
//   const history = useHistory();
//   const [animals, setAnimals] = useState();
//   const [loading, setLoading] = useState();
//   const isLogin = useSelector((state) => state.auth.current);
//   useEffect(() => {
//     if (!isLogin) {
//       history.push('/login');
//       localStorage.removeItem(StorageKeys.TOKEN);
//     }
//     (async () => {
//       try {
//         const animalsList = await animalApi.getAnimals();
//         setAnimals(animalsList);
//         console.log('Animals List: ', animalsList);
//       } catch (error) {
//         console.log('Failed to fetch todos: ', error);
//       }
//       setLoading(false);
//     })();
//   }, [history, isLogin]);
//   return (
//     <div>
//       <p>animal list</p>
//     </div>
//   );
// }

// export default DetailPage;
