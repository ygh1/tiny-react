/**
 *
 *
 * @export
 * @param {*} virtualDOM    new virtual DOM
 * @param {*} oldVirtualDOM old virtual DOM
 * @param {*} oldDOM        需要更新的父节点
 */
export default function updateTextNode (virtualDOM, oldVirtualDOM, oldDOM) {
  if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    oldDOM.textContent = virtualDOM.props.textContent
    oldDOM._virtualDOM = virtualDOM
  }
}