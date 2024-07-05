/**
 * route 경로에서 path parameter를 치환하여 경로를 반환한다.
 * @param basePath URL 경로
 * @param replacer 치환할 path param 정보 (e.g. {[pathParam]: [치환할 값]})
 */
export const replaceRoutePath = (
  basePath: string,
  replacer: { [key: string]: string | number },
) => {
  return Object.entries(replacer).reduce((acc, entry) => {
    const [key, value] = entry;
    return acc.replace(`:${key}`, value.toString());
  }, basePath);
};

/**
 * Object 를 query paremeter로 변경해주는 메소드
 * @param obj
 */
export const toQueryParamString = (obj: { [key: string]: any }) => {
  const queryParamList = Object.entries(obj).reduce((acc, entry) => {
    const [key, value] = entry;
    if (value === null || value === undefined || value === '') return acc;
    acc.push(`${key}=${value}`);
    return acc;
  }, [] as string[]);
  return `?${queryParamList.join('&')}`;
};
