
/**
 * indexedDB.open()方法返回一个 IDBRequest 对象。
 * 这个对象通过三种事件error、success、upgradeneeded，
 * 处理打开数据库的操作结果。
 */
var request = window.indexedDB.open(databaseName, version);