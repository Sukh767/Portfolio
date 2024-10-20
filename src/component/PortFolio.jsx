import React from "react";
import "./PortFolio.css";

const PortFolio = () => {
  return (
    <>
      <div className="mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
      </div>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/Crop_yield_prediction.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Crop Yield Prediction&#160; ML &amp; Python
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-yellow-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/MERN-E-Commerce-Store.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                E-commerce site with Backend Technology - MERN & Redux tools
              </div>

              <div class="ag-courses-item_date-box">
                <a
                  href="https://github.com/Sukh767/MERN-E-Commerce-Store.git"
                  target="_blank"
                >
                  <button class="bg-lime-400 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
                <a
                  href="https://electromart-72lq.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="bg-indigo-500 text-black font-bold px-4 py-2 rounded ml-3">
                    Show
                  </button>
                </a>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/Spotify-Clone.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                UX/UI Spotify Clone HTML-CSS
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-green-500 hover:bg-emerald-700 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/Youtube-clone.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Youtube Clone HTML CSS &amp; JS
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-red-600 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/E-Commerce-sites.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                E-Commerce website Frontend
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-sky-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/Plagiarism-Checker-in-Python.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Plagiarism Checker Pyhthon
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-pink-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/Music-Player-in-Python.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">Music Player &nbsp;Python</div>
              <div class="ag-courses-item_date-box">
                <button className="bg-indigo-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/Sukh767.github.io.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg_k"></div>
              <div class="ag-courses-item_title">
                Pdf Splitter
                <br />
                Java
              </div>
              <div class="ag-courses-item_date-box">
                <button className="bg-teal-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a
              href="https://github.com/Sukh767/Todo_Application.git"
              target="_blank"
              class="ag-courses-item_link"
            >
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Todo Application &nbsp;React
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-slate-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortFolio;
