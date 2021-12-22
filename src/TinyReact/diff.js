import mountElement from "./mountElement"
import updateTextNode from './updateTextNode'

/**
 *
 *
 * @export
 * @param {*} virtualDOM  将要更新的虚拟DOM
 * @param {*} container   虚拟DOM将要挂载的父元素节点
 * @param {*} oldDOM      旧元素节点，上面挂载着虚拟DOM
 */
export default function diff(virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else {
    // diff
    if (virtualDOM.type === 'text') {
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    }
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i])
    });
  }
}