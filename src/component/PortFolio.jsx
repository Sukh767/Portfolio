import React from "react";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
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
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                UI/Web&amp;Graph design for teenagers 11-17&#160;years old
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-yellow-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                UX/UI Web-Design&#160;+ Mobile Design
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-green-500 hover:bg-emerald-700 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Annual package "Product+UX/UI+Graph designer&#160;2022"
              </div>

              <div class="ag-courses-item_date-box">
                <button className="bg-red-600 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">Graphic Design</div>

              <div class="ag-courses-item_date-box">
                <button className="bg-purple-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">Motion Design</div>

              <div class="ag-courses-item_date-box">
                <button className="bg-pink-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Front-end development&#160;+ jQuery&#160;+ CMS
              </div>
              <div class="ag-courses-item_date-box">
                <button className="bg-indigo-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg_k"></div>
              <div class="ag-courses-item_title">Digital Marketing</div>
              <div class="ag-courses-item_date-box">
                <button className="bg-teal-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">Interior Design</div>

              <div class="ag-courses-item_date-box">
                <button className="bg-yellow-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded">
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
