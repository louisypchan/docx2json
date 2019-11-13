declare function require(name: string);
const incstr = require('incstr');
const nextId  = incstr.idGenerator();

export const utils = {
  uniqueIdGenerator: (): string => +(new Date()) + nextId(),
};
