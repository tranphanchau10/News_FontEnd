import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _3_fetch_BoxData_store } from '../../../store/store'

class Box_3 extends Component {
  componentDidMount(){
    if(this.props.items.lenght <= 0){
      this.props._3_fetch_BoxData_store();
    }
  }
  render() {
    const {items} = this.props;
    return (
      <div class="block block-left">
        <h3 class="section-title"><a href="category.html">World News</a><span class="see-all"><a href="category.html">More</a></span></h3>
        <ul>
          {items.map((prop, key) => {
            if(key == 0){
              return (
                <li class="article-first">
                  <a href="post.html"><img class="entry-thumbnail" style={{width:344, height:193}} src={prop.images[0].image} alt=""/></a>
                  <h2 class="entry-title"><a href="post.html">{prop.title}</a></h2>
                      <div class="entry-meta">
                          <span class="entry-stars"></span>        
                          <span class="entry-date">{prop.date}</span>
                          <span class="entry-comments"><a href="post.html#comments">3 Comments</a></span>
                      </div>
                  <div class="entry-summary">
                    {prop.description}
                  </div>
                  <div class="more-link">
                      <a href="post.html">Read the rest of this entry</a>
                  </div>
                </li>
              );
            }else{
              return(
                <li class="article-list clearfix">
                <a href="post.html"><img class="entry-thumbnail" style={{width:52, height:52}} src={prop.images[0].image} alt=""/></a>
                <h2 class="entry-title"><a href="post.html">{prop.title}</a></h2>
                  <div class="entry-meta">
                      <span class="entry-date">{prop.date}</span>
                      <span class="entry-comments"><a href="post.html#comments">3 Comments</a></span>
                  </div>
              </li>
              );
            }
          })}
        </ul>
			</div>
    )
  }
}

Box_3.serverFetch = _3_fetch_BoxData_store

const mapStateToProps = (state) => ({
  items: state._3_BoxData
})

const mapDispatchToProps = {
  _3_fetch_BoxData_store
}

export default connect(mapStateToProps, mapDispatchToProps)(Box_3);