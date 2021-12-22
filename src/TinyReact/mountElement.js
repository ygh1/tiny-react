import isFunction from './isFunction'
import mountNativeElement from './mountNativeElement'
import mountComponent from './mountComponent.js'

export default function mountElement (virtualDOM, container) {
  // Componenet vs NativeElement
  if (isFunction(virtualDOM)) {
    // Componenet
    mountComponent(virtualDOM, container)
  } else {
    // NativeElement
    mountNativeElement(virtualDOM, container)
  }
}