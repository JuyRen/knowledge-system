/**
 * 创建一片固定长度的内存空间， 单位为byte， 1byte = 8bit
 * 创建成功后无法对它的长度增加或减少
 * 访问内存内容，需要通过另外的”视图(TypedArray)“对象，不能直接访问该内存
 *
*/

const buffer = new ArrayBuffer(10)

const uint8Array = new Uint8Array(buffer)
