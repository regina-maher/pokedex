import React from "react";

function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              about
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              base stats
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              evolution
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              moves
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
