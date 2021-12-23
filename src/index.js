
import TinyReact from './TinyReact'

const root = document.getElementById('root')

// const virtualDOM = (
//   <div className="container">
//     <h1>你好 Tiny React</h1>
//     <h2 data-test="test">(编码必杀技)</h2>
//     <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div>
//     <h3>(首次渲染)</h3>
//     {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//     {2 == 2 && <div>2</div>}
//     <span>这是一段内容</span>
//     <button onClick={() => alert("你好")}>点击我</button>
//     <h3>这个将会被删除</h3>
//     2, 3
//     <input type="text" value="13" />
//   </div>
// )

// const modifyDOM = (
//   <div className="container">
//     <h2>你好 Tiny React</h2>
//     <h2 data-test="test">(编码必杀技)</h2>
//     <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div>
//     <h3>(观察: 这个将会被改变)</h3>
//     {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//     {2 == 2 && <div>2</div>}
//     <span>这是一段内容</span>
//     <button onClick={() => alert("你好")}>点击我</button>
//     2, 3
//     <input type="text" />
//   </div>
// )


function Heart (props) {

  return <Demo {...props} />
}

function Demo (props) {
  return <div> {props.name} {props.age} </div>
}

class Alert extends TinyReact.Component{
  constructor (props) {
    super(props)
    this.state = {
      title: 'default title'
    }
    this.handClick = this.handClick.bind(this)
  }
  handClick() {
    this.setState({
      title: 'changed title'
    })
  }
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render () {
    return (
      <div>
        {this.props.name}
        {this.props.age}
        <div>{this.state.title}</div>
        <button onClick={this.handClick}>更改</button>
      </div>
    )
  }
}

TinyReact.render(<Alert name="zhangsan" age="18" />, root)

setTimeout(() => {
  TinyReact.render(<Alert name="lisi" age="20" />, root)
  // TinyReact.render(<Heart name="lisi" age="20" />, root)
}, 2000)
