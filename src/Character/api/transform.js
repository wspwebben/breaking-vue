import { UNKNOWN } from '/@/Character/status';

/**
 * @typedef {Object} Character
 * @property {number} id
 * @property {string} name - Character's full name
 * @property {string} nickname - Character's alias
 * @property {string} status - Alive|Deceased|Unknown
 * @property {string} photo - Url with photo
 * @property {string[]} occupation - 
 * @property {string} portrayed - Actor's name
 */


/**
 * @param {Object} character - A character object from api
 * @return {Character} A transformed character object
 */
export const transform = (character) => {
  const {
    char_id: id,
    img: photo,
    name,
    nickname,
    occupation,
    portrayed,
    status
  } = character;

  return {
    id,
    name,
    nickname,
    status,
    photo,
    occupation,
    portrayed,
  }
}

/**
 * @param {string} name - Character's name
 * @return {Character} An object for unknown character
 */
export const getUnknownCharacter = (name) => {

  return {
    id: -1,
    name,
    nickname: '',
    status: UNKNOWN,
    photo: 'unknown-character.jpg',
    occupation: [],
    portrayed: '',
  }
}