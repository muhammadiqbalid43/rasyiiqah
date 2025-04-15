export class Collection {
  static isNotEmpty<T>(arr: T[] | undefined): boolean {
    return Array.isArray(arr) && arr.length > 0;
  }

  static first<T>(arr: T[] | undefined): T | undefined {
    if (!arr) return undefined;

    return arr.length > 0 ? arr[0] : undefined;
  }

  static foreachByNumber(count: number, callback: VoidFunction) {
    for (let i = 0; i < count; i++) {
      callback();
    }
  }
}
