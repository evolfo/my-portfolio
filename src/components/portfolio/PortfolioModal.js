import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import compose from 'recompose/compose'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import { modalOpen, modalClose } from '../../Redux/actions'

 const style = {
  	backdrop: {
  	  backgroundColor: '#00000112'
  	},
  	action: {
  	  justifyContent: 'inherit'
  	},
  	paper: {
  	  width: '70vw',
  	  maxWidth: '70vw',
  	  background: '#020202fc',
  	  marginTop: '-3rem'
  	}
  }

const PortfolioModal = props => {

  console.log(props.img)

  const { classes } = props

  const style = {
  	img: {
  	  background: `url(${props.img.url})`,
  	},
  	rightButton: {
  	  float: 'right',
  	  color: 'white',
  	  fontSize: '1.5rem'
  	}
  }

  return (
  	<Dialog
      open={props.modalIsOpen}
      onClose={props.modalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className='modal-container'
      BackdropProps={{
      	classes: {
      	  root: classes.backdrop
      	}
      }}
      PaperProps ={{
        classes: {
         root: classes.paper
        }
      }}
    >
      <div className="modal-img" style={style.img}></div>
      <DialogTitle id="alert-dialog-title">{props.img.title}</DialogTitle>
      <DialogContent className="title">
        <DialogContentText id="alert-dialog-description">
          {props.img.description}
        </DialogContentText>
        <div style={style.buttonContainer}>
          <a href={props.img.link} target="_blank"><Button variant="contained">Website</Button></a>
          {typeof props.img === "object" && props.img.github ? <a target="_blank" href={props.img.github}><Button variant="contained">Github</Button></a> : null }
          <Button className="right-button" style={style.rightButton} onClick={props.modalClose} color="primary">
            X
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const mapStateToProps = state => {
  return state
}

export default compose(
	withStyles(style),
	connect(mapStateToProps, { modalOpen, modalClose, modalClose })
)(withRouter(PortfolioModal))










