import React, { Component } from 'react'
import postData from '../data/List.json'

class List extends Component {
	render () {
		return (
			<div >
			  <h1> </h1>
			  {postData.map((postDetail, index)=>{
			  	return <h1>{postDetail.title}</h1>
			  })}
			 </div>
		)
	}
}

export default List
