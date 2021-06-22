import React from 'react';

import { connect } from 'react-redux';

const Player = ({categories, movie}) => (
      <div>
        <h1>Categoria: {categories.name}</h1>
        <h2>Filme: {movie.title}</h2>
      </div>
)

const mapStateToProps = state => ({
  categories: state.movieReducer.selectedCategory,
  movie: state.movieReducer.selectedMovie,
})

export default connect(mapStateToProps, null)(Player);