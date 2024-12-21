import React from "react";
import Discover from '../Images/Discover.png'
import Delivery from '../Images/Delivery.png'
import Video from '../Images/Video.png'
import Similey from '../Images/Similey.png'

const Zulu: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Latest Collections Section */}
<section className="py-10 px-4 bg-white w-full max-w-screen-lg mx-auto flex flex-col items-center">
  <div className="text-center">
    <h2 className="text-2xl font-semibold text-black">Latest Collections</h2>
    <p className="text-black">Discover the best of Gurugram's fashion</p>
  </div>
  <div className="relative flex justify-center items-center mt-20">
    {/* Left Arrow */}
    <button className="absolute left-[-25px] p-2 rounded-full hover:bg-gray-600 hidden sm:block">
      <span className="sr-only">Previous</span>
      <svg width="32" height="32" viewBox="0 0 988 979" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2036_8752)">
          <rect x="958" y="849" width="828" height="819" rx="409.5" transform="rotate(-180 958 849)" fill="#808080" shape-rendering="crispEdges"/>
          <path d="M576.025 620.936L554.818 642.236C545.839 651.255 531.319 651.255 522.435 642.236L336.734 455.811C327.755 446.792 327.755 432.208 336.734 423.285L522.435 236.764C531.415 227.745 545.934 227.745 554.818 236.764L576.025 258.064C585.1 267.179 584.909 282.051 575.643 290.974L460.535 401.121H735.074C747.779 401.121 758 411.388 758 424.148V454.851C758 467.612 747.779 477.879 735.074 477.879H460.535L575.643 588.026C585.004 596.949 585.195 611.821 576.025 620.936Z" fill="black"/>
        </g>
        <defs>
          <filter id="filter0_d_2036_8752" x="0" y="0" width="988" height="979" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-50" dy="50"/>
            <feGaussianBlur stdDeviation="40"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2036_8752"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2036_8752" result="shape"/>
          </filter>
        </defs>
      </svg>
    </button>
    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className="h-80 w-[200px] sm:w-[160px] bg-grey rounded-lg shadow-md flex items-center justify-center"
        >
        </div>
      ))}
    </div>
    {/* Right Arrow */}
    <button className="absolute right-[-22px] p-2 rounded-full hover:bg-gray-600 hidden sm:block">
      <span className="sr-only">Next</span>
      <svg width="32" height="32" viewBox="0 0 988 979" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2036_8751)">
          <rect x="130" y="30" width="828" height="819" rx="409.5" fill="#808080" shape-rendering="crispEdges"/>
          <path d="M511.975 258.064L533.182 236.764C542.161 227.745 556.681 227.745 565.565 236.764L751.266 423.189C760.245 432.208 760.245 446.792 751.266 455.715L565.565 642.236C556.585 651.255 542.066 651.255 533.182 642.236L511.975 620.936C502.9 611.821 503.091 596.949 512.357 588.026L627.465 477.879H352.926C340.221 477.879 330 467.612 330 454.852V424.149C330 411.388 340.221 401.121 352.926 401.121H627.465L512.357 290.974C502.996 282.051 502.805 267.179 511.975 258.064Z" fill="black"/>
        </g>
        <defs>
          <filter id="filter0_d_2036_8751" x="0" y="0" width="988" height="979" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-50" dy="50"/>
            <feGaussianBlur stdDeviation="40"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2036_8751"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2036_8751" result="shape"/>
          </filter>
        </defs>
      </svg>
    </button>
  </div>
</section>



      {/* Experience ZULU Section */}
      <section className="py-10 px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Experience ZULU</h2>
          <p className="text-gray-400">
            Where Fashion Meets Your Lifestyle, Instantly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Image 1 */}
          <img
            src={Discover}
            alt="Discover"
            className="w-full h-auto rounded-lg"
          />

          {/* Image 2 */}
          <img
            src={Delivery}
            alt="Delivery"
            className="w-full h-auto rounded-lg"
          />

          {/* Image 3 */}
          <img
            src={Video}
            alt="Video Tour"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 px-4 bg-black">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        </div>
        <img src={Similey} alt="" className="w-6 h-6 lg:mx-56 sm:mx-20" />
        <ul className="max-w-4xl mx-auto text-gray-400 space-y-4">
          <li>
            <strong>1. What is Zulu Club?</strong> <br />
            Zulu Club is a premium shopping platform that combines the convenience of e-commerce <br />
            with the curated experience of malls, delivering items to your doorstep in 100 minutes or less.
          </li>
          <li>
            <strong>2. What can I shop on Zulu Club?</strong>
          </li>
          <li>
            <strong>3. Where is Zulu Club operational?</strong>
          </li>
          <li>
            <strong>4. How does the video tour feature work?</strong>
          </li>
          <li>
            <strong>5. Is there a return policy?</strong>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Zulu;
