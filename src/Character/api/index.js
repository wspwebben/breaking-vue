import api from '/@/service/api';

import { transform, getUnknownCharacter } from './transform';

const CHARACTERS = 'characters';

export const getCharacterByName = async (name) => {
  const signedName = name.split(' ').join('+');

  const [character] = await api.get(`${CHARACTERS}?name=${signedName}`);

  if (!character) {
    return getUnknownCharacter(name);
  }

  return transform(character);
}
