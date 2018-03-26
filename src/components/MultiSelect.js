import "react-select/dist/react-select.css"
import "react-virtualized/styles.css"
import "react-virtualized-select/styles.css"
import React, { Component } from 'react'
import createFilterOptions from "react-select-fast-filter-options"
import Async from "react-virtualized-select"

class MultiSelect extends Component {

  state = {
    value:'',
    options:[]
  }

  handleOnChange = (value) => {
    this.setState({ value })
  }

  componentDidMount(){
    const {values} = this.props
    
    values.then(d=>this.setState({options:d.restaurants}))
      
  }

  render() {
    
     const { values, placeholder, multi, className } = this.props
     const { isLoadingExternally, options, value} = this.state
     console.log(this.state.options)
    return (
      <Async className={className} multi={true} value={value} multi={multi} rtl={true} placeholder={placeholder} options={options} onChange={this.handleOnChange} />
    )
  }
}
export default MultiSelect