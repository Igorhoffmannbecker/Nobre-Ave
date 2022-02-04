import {useRef, useState, useEffect} from 'react'

export default function Slider({banners}) {
    const slider = useRef(null);
    slider.cuurrent && setTimeout(setInterval(slider.current.scrollLeft += slider.current.offsetWidth, 1000),1000)
    const [sliderButtonIsHidden, setSliderButtonIsHidden] = useState(true)
    return (
      <>
        <div className="moldura" align="center" onMouseEnter={() => setSliderButtonIsHidden(false)} onMouseLeave={() => setSliderButtonIsHidden(true)}>
          <div className={`buttons${sliderButtonIsHidden ? " hidden" : ""}`}>
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
                    <img
                      src={banner.img.url}
                      alt="imagem de caminhão"
                      w="100%"
                      h="100%"
                    />
                </div>
                )
              })}
              
          </div>
        </div>
        </>
    )
}