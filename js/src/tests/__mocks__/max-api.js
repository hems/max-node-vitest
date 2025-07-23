// We got it from the Max.app itself
// Max.app/Contents/Resources/C74/packages/Node for Max/source
// Constants
export const MESSAGE_TYPES = {
  ALL: "all",
  BANG: "bang", 
  DICT: "dict",
  NUMBER: "number",
  LIST: "list"
};

export const POST_LEVELS = {
  ERROR: "error",
  INFO: "info", 
  WARN: "warn"
};

export const MAX_ENV = {
  MAX: "max",
  MAX_FOR_LIVE: "maxforlive", 
  STANDALONE: "max:standalone"
};

// Mock functions that log to console instead of Max
export const addHandler = (selector, handler) => {
  console.log(`[MOCK] Max.addHandler: ${selector}`);
};

export const addHandlers = (handlers) => {
  console.log(`[MOCK] Max.addHandlers:`, Object.keys(handlers));
};

export const removeHandler = (selector, handler) => {
  console.log(`[MOCK] Max.removeHandler: ${selector}`);
};

export const removeHandlers = (selector) => {
  console.log(`[MOCK] Max.removeHandlers: ${selector || 'all'}`);
};

export const outlet = async (...args) => {
  console.log(`[MOCK] Max.outlet:`, ...args);
  return Promise.resolve();
};

export const outletBang = async () => {
  console.log(`[MOCK] Max.outletBang`);
  return Promise.resolve();
};

export const post = async (...args) => {
  console.log(`[MOCK] Max.post:`, ...args);
  return Promise.resolve();
};

export const getDict = async (id) => {
  console.log(`[MOCK] Max.getDict: ${id}`);
  return Promise.resolve({});
};

export const setDict = async (id, dict) => {
  console.log(`[MOCK] Max.setDict: ${id}`, dict);
  return Promise.resolve(dict);
};

export const updateDict = async (id, path, value) => {
  console.log(`[MOCK] Max.updateDict: ${id} at ${path}`, value);
  return Promise.resolve({});
}; 