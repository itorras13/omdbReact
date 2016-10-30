import React from 'react';
import Modal from './modal';

export default function MovieGallery({movies}) {
  return (
    <div className="table-responsive">
      <table className="table text-center table-nonfluid">
        <tbody>
        {movies.map((movie, index) => (     
          <tr key={index}>
            <td>
              <button className="btn btn-default btn-block" data-toggle="modal" data-target={"#modal"+index}> 
                {movie.Title} ({movie.Year})
              </button>
              <Modal movieData={movie} modalId={"modal"+index} />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
