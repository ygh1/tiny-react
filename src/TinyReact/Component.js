import diff from "./diff"

export default class Component {
  constructor (props) {
    this.props = props
  }
  setState (state) {
    this.state = Object.assign({}, this.state, state)
    // 获取到最新的 虚拟DOM
    let virtualDOM = this.render()
    
    let oldDOM = this.getDOM()
    
    let container = oldDOM.parentNode

    diff(virtualDOM, container, oldDOM)
  }
  setDOM (dom) {
    this._dom = dom
  }
  getDOM () {
    return this._dom
  }
  updateProps (props) {
    this.props = props
  }

  // 声明周期函数
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps () {}
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnMount() {}
}