import React from 'react';

export default function Modal({movieData, modalId}) {
  return (
	<div id={modalId} className="modal fade" role="dialog">
	  <div className="modal-dialog modal-lg">
	    <div className="modal-content">
	      <div className="modal-body">
	        <div className="container-fluid">
	          <div className="row">
	       	    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
	       	      <img src={movieData.Poster}/>
	       	    </div>
	            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left movie-data">
	          	  <b>Title: {movieData.Title}</b><br/><br/>
	          	  <p>Rated: {movieData.Rated}</p>
	          	  <p>Plot: {movieData.Plot}</p>
	          	  <p>Released: {movieData.Released}</p>
	          	  <p>Runtime: {movieData.Runtime}</p>
	          	  <p>Genre: {movieData.Genre}</p>
	          	  <p>Director: {movieData.Director}</p>
	          	  <p>Writer: {movieData.Writer}</p>
	          	  <p>Language: {movieData.Language}</p>
	          	  <p>Awards: {movieData.Awards}</p>
	          	  <p>IMDb Rating: {movieData.imdbRating}</p>
	            </div>
	            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
	              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	            </div>
	        </div>
	        </div>
	      </div>
	    </div>

	  </div>
	</div>
  )
}
