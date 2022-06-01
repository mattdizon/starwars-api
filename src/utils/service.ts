import axios from 'axios';
import { URL } from './constants';

export const getStarWarsPeople = (url = `${URL}/people`, people = [] as Character[]): Promise<Character[]> => {
  return new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw `${response.status}: ${response.statusText}`;
        }
        response
          .json()
          .then((data) => {
            people = people.concat(data.results);

            if (data.next) {
              getStarWarsPeople(data.next, people).then(resolve).catch(reject);
            } else {
              resolve(people);
            }
          })
          .catch(reject);
      })
      .catch(reject),
  );
};

export const getStarWarsFilms = async (url: string): Promise<string> => {
  return await axios
    .get(url)
    .then((resp) => {
      if (resp.status === 200) {
        return resp.data.title;
      } else {
        throw `${resp.status}: ${resp.statusText} `;
      }
    })
    .catch((err) => window.alert(err));
};
