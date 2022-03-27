import {useRef, useState, useEffect} from 'react'

export default function Slider({banners, produto = false}) {
    const slider = useRef(null);
    const miniSlider = useRef(null);
    slider.cuurrent && setTimeout(setInterval(slider.current.scrollLeft += slider.current.offsetWidth, 1000),1000)
    const [sliderButtonIsHidden, setSliderButtonIsHidden] = useState(true)
    return (
      <>
        <div className={`moldura ${produto && ("moldura-produto")}`} align="center" onMouseEnter={() => setSliderButtonIsHidden(false)} onMouseLeave={() => setSliderButtonIsHidden(true)}>
          <div className={`buttons${sliderButtonIsHidden || produto ? " hidden" : ""}`}>
            {' '}
            <button
              onClick={(e) => {
                e.preventDefault();
                slider.current.scrollLeft -= slider.current.offsetWidth;
                console.log('opa')
              }}
            >
            	&lt;
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                slider.current.scrollLeft += slider.current.offsetWidth;
              }}

            >
             &gt;
            </button>
          </div>
  
          <div 
            className="imagens"
            ref={slider}
          >
              {banners.map(banner => {
                return (
                  <div className="img" key={banner.id}>
                    {produto ? (
                      <img
                      src={banner.url}
                      alt="imagem de caminhão"
                      w="100%"
                      h="100%"
                      />
                    ) : (
                      <img
                      src={banner.img.url}
                      alt="imagem de caminhão"
                      w="100%"
                      h="100%"
                      />
                    )} 
                </div>
                )
              })}
              
          </div>
        </div>
        {produto  && (
          <div>
          <div id="miniSlider">
            {' '}
            <button
              onClick={(e) => {''
                e.preventDefault();
                slider.current.scrollLeft -= slider.current.offsetWidth;
                miniSlider.current.scrollLeft -= miniSlider.current.offsetWidth;
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
            </button>
            <div className="miniSlider" ref={miniSlider}>
            {banners.map(banner => {
                return (
                  <div className="img" key={banner.id}>
                    <img
                      src={banner.url}
                      alt="imagem de caminhão"
                      w="25%"
                      h="25%"
                    />
                </div>
                )
              })}
              <div className="img" />
              <div className="img" />
              <div className="img" />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                slider.current.scrollLeft += slider.current.offsetWidth;
                miniSlider.current.scrollLeft += miniSlider.current.offsetWidth * 0.25;
              }}

            >
             <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
             </button>
          </div>
          </div>
        )
        }
        </>
    )
}