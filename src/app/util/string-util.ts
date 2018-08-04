/**
 * Created by txc on 2017/11/29 15:34
 */

export class StringUtil {

  /**
   * 判断字符串是否为空
   */
  public static isBlank(str: string): boolean {
    if (str == undefined || str == null) {
      return true;
    }
    if (typeof(str) != 'string') {
      return true;
    }
    str = str.replace(/\s/g, "");
    if (str == '') {
      return true;
    }
    return false;
  }

  public static isNotBlank(str:string): boolean {
    return !StringUtil.isBlank(str);
  }

}
