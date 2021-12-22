import diff from "./diff"

/**
 * @param {object} virtualDOM
 * @param {element} container
 * @param {object} oldDom
 */
export default function render (virtualDOM, container, oldDom = container.firstChild) {
  diff(virtualDOM, container, oldDom)
}