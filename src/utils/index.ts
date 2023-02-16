// 判断值是否存在，并且不为0
export const isFalsy = <T = unknown>(value: T) =>
  value === 0 ? false : !value;
/** 清理对象中值为空的key */
export const cleanObject = <T extends Record<string, unknown>>(object: T) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
