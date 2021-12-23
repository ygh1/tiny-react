import createDOMElement from "./createDOMElement"
import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"
import updateTextNode from './updateTextNode'
import unmountNode from './unmountNode'

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
  } else if (virtualDOM.type !== 'function'){
    // diff
    if (virtualDOM.type === 'text') {
      // 是文本
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 是标签
      if (virtualDOM.type !== oldVirtualDOM.type) {
        // 标签类型不同
        const newElement = createDOMElement(virtualDOM)
        oldDOM.parentNode.replaceChild(newElement, oldDOM)
      } else {
        // 标签类型相同
        updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
      }

      // 删除多余的DOM元素
      let oldChildNodes = oldDOM.childNodes
      if (oldChildNodes.length > virtualDOM.children.length) {
        for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
          unmountNode(oldChildNodes[i])
        }
      }
    }
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i])
    });
  }
}