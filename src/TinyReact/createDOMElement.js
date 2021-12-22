import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"

export default function createDOMElement (virtualDOM) {
  let newElement = null
  if (virtualDOM.type === 'text') {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent)
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type)
    updateNodeElement(newElement, virtualDOM)
  }

  // 虚拟DOM挂载在生成的元素上面
  newElement._virtualDOM = virtualDOM

  // 递归创建子元素
  virtualDOM.children.forEach(child => {
    mountElement(child, newElement)
  })

  return newElement
}