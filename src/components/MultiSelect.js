import "react-select/dist/react-select.css"
import "react-virtualized/styles.css"
import "react-virtualized-select/styles.css"
import React, { Component } from 'react'
import Async from "react-virtualized-select"

class MultiSelect extends Component {

  state = {
    value:'',
    options:[]
  }

  handleOnChange = (value) => {
    this.props.handleSelect(value)
    this.setState({ value })
  }

  componentDidMount(){
    const {values} = this.props
    this.setState({options:values})      
  }

  render() {
    
     const { placeholder, multi, className, rtl } = this.props
     const { options, value} = this.state
     
    return (
      <Async className={className} value={value} multi={multi} rtl={rtl} placeholder={placeholder} options={options} onChange={this.handleOnChange} />
    )
  }
}

export default MultiSelect