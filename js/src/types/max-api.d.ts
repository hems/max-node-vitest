// TypeScript declarations for max-api
// We got it from the Max.app itself
// Max.app/Contents/Resources/C74/packages/Node for Max/source
declare module 'max-api' {
  type JSONPrimitive = string | number | boolean | null;
  interface JSONArray extends Array<JSONValue> {}
  interface JSONObject { [key: string]: JSONValue | undefined; }
  type JSONValue = JSONPrimitive | JSONArray | JSONObject;
  type Anything = string | number | Array<string | number> | JSONObject | JSONArray;
  type MaxFunctionSelector = string;
  type MaxFunctionHandler = (...args: any[]) => any;

  export enum MAX_ENV {
    MAX = "max",
    MAX_FOR_LIVE = "maxforlive", 
    STANDALONE = "max:standalone"
  }

  export enum MESSAGE_TYPES {
    ALL = "all",
    BANG = "bang",
    DICT = "dict", 
    NUMBER = "number",
    LIST = "list"
  }

  export enum POST_LEVELS {
    ERROR = "error",
    INFO = "info",
    WARN = "warn"
  }

  export function addHandler(selector: MaxFunctionSelector, handler: MaxFunctionHandler): void;
  export function addHandlers(handlers: Record<MaxFunctionSelector, MaxFunctionHandler>): void;
  export function removeHandler(selector: MaxFunctionSelector, handler: MaxFunctionHandler): void;
  export function removeHandlers(selector?: MaxFunctionSelector): void;
  export function outlet(...args: JSONValue[]): Promise<void>;
  export function outletBang(): Promise<void>;
  export function post(...args: Array<Anything | POST_LEVELS>): Promise<void>;
  export function getDict(id: string): Promise<JSONObject>;
  export function setDict(id: string, dict: JSONObject): Promise<JSONObject>;
  export function updateDict(id: string, updatePath: string, updateValue: JSONValue): Promise<JSONObject>;
} 