import lodash from 'lodash';

/**
 * 숫자를 3자리마다 콤마(,)를 찍어서 반환한다.
 * @param num 숫자
 * @param options
 *   locale locale
 *   prefix 접두사 (예: $, ₩)
 *   suffix 접미사 (예: $, ₩)
 */
export const toMoneyFormat = (
  num?: number,
  options?: { locale?: 'en-US' | 'ko-KR'; prefix?: string; suffix?: string },
) =>
  !lodash.isNil(num)
    ? `${options?.prefix || ''}${num?.toLocaleString(options?.locale || 'ko-KR', { maximumFractionDigits: 15 })}${options?.suffix || ''}`
    : '';
