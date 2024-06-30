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
