import React, { Component } from 'react'
import PortfolioCard from './portfolio/PortfolioCard'
import { connect } from 'react-redux'

import PortfolioModal from './portfolio/PortfolioModal'
import { modalOpen, modalClose } from '../Redux/actions'

class Portfolio extends Component {
  
	state = {
  	  imgs: [],
  	  selectedImg: []
    }

    componentDidMount(){
  	  fetch('/images.json')
  	    .then(resp => resp.json())
  	    .then(imgs => {
  	      this.setState({
  	  	    imgs: imgs
  	  	  })
  	    })
    }

    handleModalClick = (e) => {
      this.props.modalOpen()
      const selectedImg = this.state.imgs.find(img => {return img.id === parseInt(e.target.id)})

      this.setState({
      	selectedImg
      })
    }

	render() {
	  const style = {
	  	portfolioContainer: {
	  	  padding: '2rem',
	  	  paddingTop: '0',
	  	  display: 'grid',
	  	  maxWidth: '1400px',
	  	  margin: '0 auto'
	  	},
	  }

	  const renderPortfolio = this.state.imgs.map(img => {
	  	return (
	  	  <div onClick={(e) => this.handleModalClick(e)} key={img.title} className="portfolio-background">
	  	    <PortfolioCard img={img} />
	  	  </div>
	  	)
	  })

	  return (
	  	<div className="container">
	  	  <section>
	  	    <div class="portfolio-container">
	  	      <h1>Angelo's Work</h1>
	  	      <div>
	  	        {renderPortfolio}
	  	      </div>
	  	    </div>
	  	    <PortfolioModal img={this.state.selectedImg} />
	  	  </section>
	  	</div>
	  )
	}
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, { modalClose, modalOpen })(Portfolio)