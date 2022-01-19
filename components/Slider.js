import {useRef, useState} from 'react'

export default function Slider() {
    const slider = useRef(null);
    slider.current && setInterval(slider.current.scrollLeft += slider.current.offsetWidth, 20000) 
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
              <div className="img" >
                <img
                  src="/imgs/1.jpeg"
                  alt="imagem de caminhão"
                  w="100%"
                  h="100%"
                />
              </div>
              <div className="img" >
                <img
                  src="/imgs/patagonia.jpg"
                  alt="imagem de caminhão"
                  w="100%"
                  h="100%"
                />
              </div>
              <div className="img" >
                <img
                  src="/imgs/artic.jpg"
                  alt="imagem de caminhão"
                  w="100%"
                  h="100%"
                />
              </div>
              <div className="img" >
                <img
                  src="/imgs/lake.jpg"
                  alt="imagem de caminhão"
                  w="100%"
                  h="100%"
                />
              </div>
              <div className="img" >
                <img
                  src="/imgs/minimalista.jpg"
                  alt="imagem de caminhão"
                  w="100%"
                  h="100%"
                />
              </div>
              <div className="img">
                <img
                  src="/imgs/mountain-lake.jpg"
                  alt="imagem de caminhão"
                  w="100%"
                  h="100%"
                />
              </div>
          </div>
        </div>
        </>
    )
}